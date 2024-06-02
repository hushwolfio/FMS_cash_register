import '../../matchMedia';
import { act, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CashRegister } from './CashRegister';
import { MantineProvider } from '@mantine/core';

describe('CashRegister', () => {
    it('should render', () => {
        const { container } = render(<MantineProvider><CashRegister /></MantineProvider>);
        expect(container).toMatchSnapshot();
    });

    it('should dispense change', () => {
        const { container, getByText, getByLabelText } = render(<MantineProvider><CashRegister /></MantineProvider>);
        expect(container).toMatchSnapshot();

        act(() => {
            const inputElement = getByLabelText('Amount to dispense') as HTMLInputElement;
            inputElement.value = '100';
            inputElement.dispatchEvent(new Event('change'));
        });

        expect(container).toMatchSnapshot();

        act(() => {
            getByText('Dispense').click();
        });

        expect(container).toMatchSnapshot();
    });
});