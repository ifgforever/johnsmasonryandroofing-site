/* Light / dark toggle.
 *
 * Two details worth knowing before changing this:
 *
 * 1. The <html data-theme> attribute is set by a tiny inline script in each
 *    page <head>, not here. It has to run before first paint or the page
 *    flashes dark before switching to light.
 *
 * 2. Both button labels are rendered into the DOM up front and one is hidden,
 *    rather than rewriting textContent on click. languages.js snapshots text
 *    nodes once at load and translates those; text created later would stay
 *    English forever. This file must therefore load BEFORE languages.js.
 */
(() => {
    const STORAGE_KEY = 'johns-masonry-roofing-theme';

    const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.4v2.4M12 19.2v2.4M4.2 12H1.8M22.2 12h-2.4M6.5 6.5 4.8 4.8M19.2 19.2l-1.7-1.7M17.5 6.5l1.7-1.7M4.8 19.2l1.7-1.7"/></svg>';
    const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.4A8.6 8.6 0 1 1 9.6 3.5a6.9 6.9 0 0 0 10.9 10.9Z"/></svg>';

    function systemPrefersLight() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    }

    function stored() {
        try {
            const v = localStorage.getItem(STORAGE_KEY);
            return v === 'light' || v === 'dark' ? v : null;
        } catch {
            return null;
        }
    }

    function current() {
        return document.documentElement.dataset.theme || (systemPrefersLight() ? 'light' : 'dark');
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Switch between light and dark mode');
    button.innerHTML =
        '<span class="theme-icon" aria-hidden="true"></span>' +
        '<span class="theme-label theme-label-light">Light mode</span>' +
        '<span class="theme-label theme-label-dark">Dark mode</span>';

    const icon = button.querySelector('.theme-icon');
    const toLight = button.querySelector('.theme-label-light');
    const toDark = button.querySelector('.theme-label-dark');

    function render(theme) {
        const isDark = theme === 'dark';
        // The button advertises where it will take you, not where you are.
        icon.innerHTML = isDark ? SUN : MOON;
        toLight.hidden = !isDark;
        toDark.hidden = isDark;
        button.setAttribute('aria-pressed', String(!isDark));
    }

    function apply(theme, persist) {
        document.documentElement.dataset.theme = theme;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'dark' ? '#1f2937' : '#f3efe9');
        render(theme);
        if (persist) {
            try {
                localStorage.setItem(STORAGE_KEY, theme);
            } catch {
                // The toggle still works for this page view without storage.
            }
        }
    }

    button.addEventListener('click', () => {
        apply(current() === 'dark' ? 'light' : 'dark', true);
    });

    render(current());
    document.body.appendChild(button);

    // Follow the OS live, but only for visitors who have not chosen for
    // themselves — an explicit choice should not be overridden mid-visit.
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
            if (!stored()) apply(event.matches ? 'light' : 'dark', false);
        });
    }
})();
