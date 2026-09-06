import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageSwitch from './LanguageSwitch.jsx';

let mockI18n;

vi.mock('react-i18next', () => ({
    useTranslation: () => ({ i18n: mockI18n }),
}));

const originalLocation = window.location;

function setLocation({ hostname, protocol = 'https:', pathname = '/', search = '', hash = '' }) {
    Object.defineProperty(window, 'location', {
        value: { hostname, protocol, pathname, search, hash },
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

function renderSwitch(language) {
    mockI18n = { language, changeLanguage: vi.fn() };
    render(<LanguageSwitch />);
    return mockI18n;
}

describe('LanguageSwitch', () => {
    it('does nothing when already on the target domain', async () => {
        const user = userEvent.setup();
        setLocation({ hostname: 'www.abitofit.com' });
        const i18n = renderSwitch('en');

        await user.click(screen.getByRole('button', { name: 'Switch to English' }));

        expect(i18n.changeLanguage).not.toHaveBeenCalled();
        expect(window.location.href).toBeUndefined();
    });

    it('redirects to the sibling domain when switching from a known domain', async () => {
        const user = userEvent.setup();
        setLocation({ hostname: 'www.abitofit.dk', pathname: '/contact', search: '?a=1', hash: '#top' });
        const i18n = renderSwitch('da');

        await user.click(screen.getByRole('button', { name: 'Switch to English' }));

        expect(window.location.href).toBe('https://www.abitofit.com/contact?a=1#top');
        expect(i18n.changeLanguage).not.toHaveBeenCalled();
    });

    it('calls i18n.changeLanguage when the domain has no known sibling', async () => {
        const user = userEvent.setup();
        setLocation({ hostname: 'localhost' });
        const i18n = renderSwitch('en');

        await user.click(screen.getByRole('button', { name: 'Skift til dansk' }));

        expect(i18n.changeLanguage).toHaveBeenCalledWith('da');
        expect(window.location.href).toBeUndefined();
    });
});
