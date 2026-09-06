import { afterEach, describe, expect, it, vi } from 'vitest';

const originalLocation = window.location;

function setHostname(hostname: string) {
    Object.defineProperty(window, 'location', {
        value: { ...originalLocation, hostname },
        writable: true,
        configurable: true,
    });
}

afterEach(() => {
    Object.defineProperty(window, 'location', {
        value: originalLocation,
        writable: true,
        configurable: true,
    });
});

async function importI18nWithHostname(hostname: string) {
    setHostname(hostname);
    vi.resetModules();
    const { default: i18n } = await import('./index');

    if (!i18n.isInitialized) {
        await new Promise((resolve) => i18n.on('initialized', resolve));
    }

    return i18n;
}

describe('i18n language detection', () => {
    it('initializes with "da" for a .dk domain', async () => {
        const i18n = await importI18nWithHostname('www.abitofit.dk');
        expect(i18n.language).toBe('da');
    });

    it('initializes with "en" for a .com domain', async () => {
        const i18n = await importI18nWithHostname('www.abitofit.com');
        expect(i18n.language).toBe('en');
    });

    it('falls back to "en" for an unrecognized domain', async () => {
        const i18n = await importI18nWithHostname('localhost');
        expect(i18n.language).toBe('en');
    });
});
