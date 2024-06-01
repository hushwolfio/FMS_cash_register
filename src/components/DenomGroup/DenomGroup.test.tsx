import '../../matchMedia';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DenomGroup } from './DenomGroup';
import { MantineProvider } from '@mantine/core';

describe('DenomGroup', () => {
    const denominations = { '1': 1, '5': 1, '10': 1, '20': 1, '50': 1, '100': 1 };
    const setDenomAmountSpy = vi.fn();
    it('should render', () => {
        const { container } = render(<MantineProvider><DenomGroup denominations={denominations} setDenomAmount={setDenomAmountSpy} /></MantineProvider>);
        expect(container).toMatchSnapshot();
    });

    it('should render with denominations', () => {
        const { getByText } = render(<MantineProvider><DenomGroup denominations={denominations} setDenomAmount={setDenomAmountSpy} /></MantineProvider>);
        expect(getByText('Add/Remove $1')).toBeInTheDocument();
    });
});