/* Estimate form: submit and send photos without leaving the site.
 *
 * Progressive enhancement. The <form> keeps its normal action/method, so with
 * JavaScript off it still posts the old way and lands on /thank-you. With JS
 * on, nothing navigates: we POST to FormSubmit's AJAX endpoint and swap in a
 * success panel in place of the form.
 *
 * If the AJAX POST fails for any reason we fall back to a native submit rather
 * than dropping the lead. A customer bounced to a third-party page is worse
 * than staying put; a lost enquiry is worse than both.
 */
(() => {
    const form = document.getElementById('lead-form');
    if (!form || !window.fetch || !window.FormData) return;

    const AJAX = 'https://formsubmit.co/ajax/e1f0a174f6505f3be7bfeb5a65c5c7c3';
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
            fallback: 'Enviando por la vía larga, un momento.',
            successTitle: 'Gracias, lo recibimos.',
            successBody: 'Tenemos sus datos y sus fotos. Nos comunicaremos con usted en breve. Si es urgente, llame al 312.485.3837.'
        },
        pl: {
            drop: 'Przeciągnij zdjęcia tutaj lub dotknij, aby wybrać',
            remove: 'Usuń zdjęcie',
            attached: (n, mb) => `Załączono ${n} ${n === 1 ? 'zdjęcie' : 'zdjęć'} (${mb} MB)`,
            tooBig: 'Te zdjęcia łącznie przekraczają 10 MB. Prosimy usunąć jedno lub dwa, a o resztę dopytamy osobno.',
            sending: 'Wysyłanie...',
            fallback: 'Wysyłamy dłuższą drogą, chwileczkę.',
            successTitle: 'Dziękujemy — wiadomość dotarła.',
            successBody: 'Mamy Państwa dane i zdjęcia. Wkrótce się odezwiemy. W pilnej sprawie prosimy dzwonić: 312.485.3837.'
        },
        en: {
            drop: 'Drag photos here, or tap to choose',
            remove: 'Remove photo',
            attached: (n, mb) => `${n} photo${n === 1 ? '' : 's'} attached (${mb} MB)`,
            tooBig: 'Those photos add up to more than 10 MB. Please remove one or two and we will follow up for the rest.',
            sending: 'Sending...',
            fallback: 'Sending the long way round — one moment.',
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

    form.addEventListener('submit', async event => {
        if (totalBytes() > MAX_TOTAL_BYTES) {
            event.preventDefault();
            return;
        }
        event.preventDefault();

        const payload = new FormData(form);
        payload.delete(fileInput ? fileInput.name : 'photos');
        picked.forEach(file => payload.append(fileInput ? fileInput.name : 'photos', file));

        const originalLabel = submitButton ? submitButton.textContent : '';
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = t().sending;
        }
        status.className = 'form-status';
        status.textContent = '';

        try {
            const response = await fetch(AJAX, {
                method: 'POST',
                body: payload,
                headers: { Accept: 'application/json' }
            });
            if (!response.ok) throw new Error('HTTP ' + response.status);
            succeed();
        } catch {
            // Never lose the enquiry: hand it to the browser the old way.
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalLabel;
            }
            status.className = 'form-status is-error';
            status.textContent = t().fallback;
            form.submit();
        }
    });

    function paintStrings() {
        dropText.textContent = t().drop;
        renderPreviews();
    }

    if (fileInput) {
        paintStrings();
        new MutationObserver(paintStrings).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-language']
        });
    }

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
