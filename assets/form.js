/* Estimate form: submit and send photos without leaving the site.
 *
 * IMPORTANT, learned the hard way: FormSubmit's /ajax/ endpoint accepts a
 * multipart POST, replies 200, emails the text fields — and silently discards
 * file attachments. Photos arrive nowhere. Attachments only work on the plain
 * endpoint, which normally navigates the customer off to formsubmit.co.
 *
 * So the form posts to the PLAIN endpoint, targeted at a hidden iframe. The
 * files are delivered properly and the page never moves. We can't read the
 * cross-origin response, so success is signalled by the iframe finishing its
 * load — which is also what happens on failure, so this trades error detection
 * for actually delivering the photos. That is the right trade for a lead form.
 *
 * With JavaScript off the form still posts normally and lands on /thank-you.
 */
(() => {
    const form = document.getElementById('lead-form');
    if (!form || !window.fetch || !window.FormData) return;

    const MAX_TOTAL_BYTES = 10 * 1024 * 1024;

    /* languages.js snapshots the DOM's text nodes once, before this file runs,
       so nothing built here would ever be translated by it. This file carries
       its own strings and re-renders when the language changes. */
    const STRINGS = {
        es: {
            drop: 'Arrastre fotos aquí o toque para elegir',
            remove: 'Quitar foto',
            attached: (n, mb) => `${n} foto${n === 1 ? '' : 's'} adjunta${n === 1 ? '' : 's'} (${mb} MB)`,
            tooBig: 'Esas fotos superan los 10 MB en total. Quite una o dos y le pediremos el resto por separado.',
            sending: 'Enviando...',
            successTitle: 'Gracias, lo recibimos.',
            successBody: 'Tenemos sus datos y sus fotos. Nos comunicaremos con usted en breve. Si es urgente, llame al 312.485.3837.'
        },
        pl: {
            drop: 'Przeciągnij zdjęcia tutaj lub dotknij, aby wybrać',
            remove: 'Usuń zdjęcie',
            attached: (n, mb) => `Załączono ${n} ${n === 1 ? 'zdjęcie' : 'zdjęć'} (${mb} MB)`,
            tooBig: 'Te zdjęcia łącznie przekraczają 10 MB. Prosimy usunąć jedno lub dwa, a o resztę dopytamy osobno.',
            sending: 'Wysyłanie...',
            successTitle: 'Dziękujemy — wiadomość dotarła.',
            successBody: 'Mamy Państwa dane i zdjęcia. Wkrótce się odezwiemy. W pilnej sprawie prosimy dzwonić: 312.485.3837.'
        },
        en: {
            drop: 'Drag photos here, or tap to choose',
            remove: 'Remove photo',
            attached: (n, mb) => `${n} photo${n === 1 ? '' : 's'} attached (${mb} MB)`,
            tooBig: 'Those photos add up to more than 10 MB. Please remove one or two and we will follow up for the rest.',
            sending: 'Sending...',
            successTitle: 'Thanks — that came through.',
            successBody: 'We have your details and your photos. Someone will get back to you shortly. If it is urgent, call 312.485.3837.'
        }
    };

    function t() {
        return STRINGS[document.documentElement.dataset.language] || STRINGS.en;
    }

    const fileInput = form.querySelector('input[type="file"]');
    const submitButton = form.querySelector('button[type="submit"]');
    let picked = [];

    /* ---------- photo picker ---------- */

    const dropzone = document.createElement('div');
    dropzone.className = 'photo-drop';
    dropzone.innerHTML = '<span class="photo-drop-text"></span>';
    const dropText = dropzone.querySelector('.photo-drop-text');

    const previews = document.createElement('div');
    previews.className = 'photo-previews';

    const note = document.createElement('p');
    note.className = 'small photo-note';

    if (fileInput) {
        fileInput.classList.add('visually-hidden-input');
        fileInput.parentNode.insertBefore(dropzone, fileInput.nextSibling);
        dropzone.after(previews);
        previews.after(note);

        dropzone.addEventListener('click', () => fileInput.click());
        dropzone.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                fileInput.click();
            }
        });
        dropzone.tabIndex = 0;
        dropzone.setAttribute('role', 'button');

        ['dragenter', 'dragover'].forEach(type =>
            dropzone.addEventListener(type, event => {
                event.preventDefault();
                dropzone.classList.add('is-over');
            })
        );
        ['dragleave', 'drop'].forEach(type =>
            dropzone.addEventListener(type, event => {
                event.preventDefault();
                dropzone.classList.remove('is-over');
            })
        );
        dropzone.addEventListener('drop', event => {
            addFiles(event.dataTransfer && event.dataTransfer.files);
        });

        fileInput.addEventListener('change', () => addFiles(fileInput.files));
    }

    function addFiles(list) {
        if (!list) return;
        for (const file of list) {
            if (!file.type.startsWith('image/')) continue;
            const duplicate = picked.some(
                existing => existing.name === file.name && existing.size === file.size
            );
            if (!duplicate) picked.push(file);
        }
        renderPreviews();
    }

    function totalBytes() {
        return picked.reduce((sum, file) => sum + file.size, 0);
    }

    function renderPreviews() {
        previews.textContent = '';
        picked.forEach((file, index) => {
            const figure = document.createElement('figure');
            figure.className = 'photo-thumb';

            const img = document.createElement('img');
            img.alt = file.name;
            img.src = URL.createObjectURL(file);
            img.addEventListener('load', () => URL.revokeObjectURL(img.src), { once: true });

            const remove = document.createElement('button');
            remove.type = 'button';
            remove.className = 'photo-remove';
            remove.setAttribute('aria-label', t().remove);
            remove.textContent = '×';
            remove.addEventListener('click', () => {
                picked.splice(index, 1);
                renderPreviews();
            });

            figure.append(img, remove);
            previews.appendChild(figure);
        });

        const over = totalBytes() > MAX_TOTAL_BYTES;
        note.classList.toggle('is-error', over);
        if (!picked.length) {
            note.textContent = '';
        } else if (over) {
            note.textContent = t().tooBig;
        } else {
            note.textContent = t().attached(picked.length, (totalBytes() / (1024 * 1024)).toFixed(1));
        }
        if (submitButton) submitButton.disabled = over;
    }

    /* ---------- submit in place ---------- */

    const status = document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    form.appendChild(status);

    // The postbox the form submits into, so the page itself never navigates.
    const postbox = document.createElement('iframe');
    postbox.name = 'jm-postbox';
    postbox.title = 'Form submission target';
    postbox.setAttribute('aria-hidden', 'true');
    postbox.style.cssText = 'position:absolute;width:0;height:0;border:0;left:-9999px';
    document.body.appendChild(postbox);
    form.target = postbox.name;

    let submitting = false;
    postbox.addEventListener('load', () => {
        // Fires once the POST completes. It also fires on the iframe's initial
        // about:blank, hence the guard.
        if (submitting) succeed();
    });

    form.addEventListener('submit', event => {
        if (totalBytes() > MAX_TOTAL_BYTES) {
            event.preventDefault();
            return;
        }

        // Files gathered by drag-and-drop live in `picked`, not on the input.
        // The native submit only sends what the input holds, so copy them
        // across before the browser builds the request body.
        if (fileInput) {
            const dt = new DataTransfer();
            picked.forEach(file => dt.items.add(file));
            fileInput.files = dt.files;
        }

        submitting = true;
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = t().sending;
        }
        status.className = 'form-status';
        status.textContent = '';
        // No preventDefault: the browser posts to FormSubmit, into the iframe.
    });

    function succeed() {
        const panel = document.createElement('div');
        panel.className = 'form-success';
        panel.setAttribute('role', 'status');
        const heading = document.createElement('h3');
        heading.textContent = t().successTitle;
        const body = document.createElement('p');
        body.textContent = t().successBody;
        panel.append(heading, body);
        form.replaceWith(panel);
        panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
})();
