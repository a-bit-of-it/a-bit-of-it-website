import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Banner from './Banner.jsx';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key, i18n: { language: 'en', changeLanguage: vi.fn() } }),
}));

vi.mock('../../utilities/useHideOnScroll.js', () => ({
    useHideOnScroll: () => false,
}));

function renderBanner() {
    render(
        <MemoryRouter>
            <Banner />
        </MemoryRouter>
    );
}

async function openMenu(user) {
    await user.click(screen.getByRole('button', { name: 'banner.menu' }));
}

describe('Banner hamburger menu', () => {
    it('opens the menu when the hamburger button is clicked', async () => {
        const user = userEvent.setup();
        renderBanner();

        await openMenu(user);

        expect(screen.getByText('banner.our-purpose', { selector: '.banner-mobile-menu a' })).toBeInTheDocument();
    });

    it('closes the menu when clicking outside of it', async () => {
        const user = userEvent.setup();
        renderBanner();

        await openMenu(user);
        expect(document.querySelector('.banner-mobile-menu')).toBeInTheDocument();

        await user.click(document.body);

        expect(document.querySelector('.banner-mobile-menu')).not.toBeInTheDocument();
    });

    it('keeps the menu open when clicking inside of it', async () => {
        const user = userEvent.setup();
        renderBanner();

        await openMenu(user);
        const menu = document.querySelector('.banner-mobile-menu');

        await user.click(menu);

        expect(document.querySelector('.banner-mobile-menu')).toBeInTheDocument();
    });
});
