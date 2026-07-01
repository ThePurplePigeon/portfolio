import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Navbar from '@/components/Navbar';

jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

describe('Navbar', () => {
    test('uses plain navigation semantics and marks the current page', () => {
        render(<Navbar />);

        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
        expect(screen.queryByRole('menubar')).not.toBeInTheDocument();
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
        expect(screen.queryByRole('menuitem')).not.toBeInTheDocument();
        expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute('aria-current', 'page');
    });

    test('opens and closes the mobile navigation menu', async () => {
        const user = userEvent.setup();
        render(<Navbar />);
        const toggle = screen.getByRole('button', { name: /toggle navigation menu/i });

        expect(toggle).toHaveAttribute('aria-expanded', 'false');

        await user.click(toggle);

        expect(toggle).toHaveAttribute('aria-expanded', 'true');
        const mobileMenu = document.getElementById('mobile-menu');
        expect(mobileMenu).toBeInTheDocument();

        await user.click(within(mobileMenu as HTMLElement).getByRole('link', { name: /about/i }));

        expect(toggle).toHaveAttribute('aria-expanded', 'false');
        expect(document.getElementById('mobile-menu')).not.toBeInTheDocument();
    });
});
