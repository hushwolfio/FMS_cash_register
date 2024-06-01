import '../../matchMedia';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Dispenser } from './Dispenser';
import { MantineProvider } from '@mantine/core';

describe('Dispenser', () => {
    it('should render', () => {
        const desiredAmount = 100;
        const error = null;
        const setDesiredAmountSpy = vi.fn();
        const setErrorSpy = vi.fn();
        const dispenseChangeSpy = vi.fn();
        render(<MantineProvider><Dispenser desiredAmount={desiredAmount} setDesiredAmount={setDesiredAmountSpy} error={error} setError={setErrorSpy} dispenseChange={dispenseChangeSpy} /></MantineProvider>);
        expect(screen.getByText('Dispense')).toBeInTheDocument();
    });

    it('should render with error', () => {
        const desiredAmount = 100;
        const error = 'Error';
        const setDesiredAmountSpy = vi.fn();
        const setErrorSpy = vi.fn();
        const dispenseChangeSpy = vi.fn();
        render(<MantineProvider><Dispenser desiredAmount={desiredAmount} setDesiredAmount={setDesiredAmountSpy} error={error} setError={setErrorSpy} dispenseChange={dispenseChangeSpy} /></MantineProvider>);
        expect(screen.getByText('Error')).toBeInTheDocument();
    });


    it('should render with dispense change button', () => {
        const desiredAmount = 100;
        const error = null;
        const setDesiredAmountSpy = vi.fn();
        const setErrorSpy = vi.fn();
        const dispenseChangeSpy = vi.fn();
        render(<MantineProvider><Dispenser desiredAmount={desiredAmount} setDesiredAmount={setDesiredAmountSpy} error={error} setError={setErrorSpy} dispenseChange={dispenseChangeSpy} /></MantineProvider>);
        fireEvent.click(screen.getByText('Dispense')); // Use fireEvent to simulate a click event
        expect(dispenseChangeSpy).toHaveBeenCalledTimes(1);
    });
});