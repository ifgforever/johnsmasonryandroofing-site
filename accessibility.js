(() => {
    const existingMain = document.querySelector('main, [role="main"]');
    const skipTarget =
        document.querySelector('.hero') ||
        existingMain ||
        document.querySelector('.card') ||
        document.querySelector('.wrap');

    if (skipTarget) {
        if (!skipTarget.id) skipTarget.id = 'main-content';

        if (!existingMain) {
            skipTarget.setAttribute('role', 'main');
        }

        const skipLink = document.createElement('a');
        skipLink.className = 'skip-link';
        skipLink.href = `#${skipTarget.id}`;
        skipLink.textContent = 'Skip to main content';
        document.body.prepend(skipLink);
    }

    document.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach((control, index) => {
        const hasName =
            control.getAttribute('aria-label') ||
            control.getAttribute('aria-labelledby') ||
            control.labels?.length;

        if (hasName) return;

        const label = control.parentElement?.querySelector(':scope > label');
        if (!label) return;

        if (!control.id) {
            const base = (control.name || `field-${index + 1}`)
                .toLowerCase()
                .replace(/[^a-z0-9_-]+/g, '-');
            control.id = base;
        }

        label.htmlFor = control.id;
    });

    document.querySelectorAll('button:not([type])').forEach(button => {
        button.type = 'button';
    });

    document.querySelectorAll('nav:not([aria-label])').forEach((nav, index) => {
        nav.setAttribute('aria-label', index === 0 ? 'Primary navigation' : 'Secondary navigation');
    });

    document.querySelectorAll('.logo').forEach(logo => {
        if (logo.textContent.trim() === 'JM') logo.setAttribute('aria-hidden', 'true');
    });

    document.querySelectorAll('svg:not([aria-label]):not([role])').forEach(svg => {
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
    });
})();
