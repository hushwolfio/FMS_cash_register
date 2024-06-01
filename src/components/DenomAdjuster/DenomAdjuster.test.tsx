import '../../matchMedia';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DenomAdjuster } from './DenomAdjuster';
import { MantineProvider } from '@mantine/core';
import { DENOMINATIONS_KEYS } from '../constant';

describe('DenomAdjuster', () => {
    it('should render', () => {
        const denom = DENOMINATIONS_KEYS[0];
        const value = 1;
        const setDenomAmount = vi.fn();
        const { container } = render(<MantineProvider><DenomAdjuster denom={denom} value={value} setDenomAmount={setDenomAmount} /></MantineProvider>);
        expect(container).toMatchSnapshot();
    });
});