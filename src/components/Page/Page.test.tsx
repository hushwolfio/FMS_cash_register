import '../../matchMedia';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Page } from './Page';
import { MantineProvider } from '@mantine/core';

describe('Page', () => {
    it('should render', () => {
        render(<MantineProvider><Page /></MantineProvider>);
        expect(screen.getByText('FMS Code Challenge: Cash Register')).toBeInTheDocument();
    });
});