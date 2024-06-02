import "../../matchMedia";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Dispenser } from "./Dispenser";
import { MantineProvider } from "@mantine/core";

describe("Dispenser", () => {
    it("should render", () => {
        const desiredAmount = 100;
        const error = null;
        const dispensedDenominations = null;
        const setDesiredAmountSpy = vi.fn();
        const dispenseChangeSpy = vi.fn();
        const onInputFocusSpy = vi.fn();
        render(
            <MantineProvider>
                <Dispenser
                    desiredAmount={desiredAmount}
                    dispensedDenominations={dispensedDenominations}
                    setDesiredAmount={setDesiredAmountSpy}
                    error={error}
                    dispenseChange={dispenseChangeSpy}
                    onInputFocus={onInputFocusSpy}
                />
            </MantineProvider>,
        );
        expect(screen.getByText("Dispense")).toBeInTheDocument();
    });

    it("should render with error", () => {
        const desiredAmount = 100;
        const error = "Error";
        const dispensedDenominations = null;
        const setDesiredAmountSpy = vi.fn();
        const dispenseChangeSpy = vi.fn();
        const onInputFocusSpy = vi.fn();
        render(
            <MantineProvider>
                <Dispenser
                    desiredAmount={desiredAmount}
                    dispensedDenominations={dispensedDenominations}
                    setDesiredAmount={setDesiredAmountSpy}
                    error={error}
                    dispenseChange={dispenseChangeSpy}
                    onInputFocus={onInputFocusSpy}
                />
            </MantineProvider>,
        );
        expect(screen.getByText("Error")).toBeInTheDocument();
    });

    it("should render with dispense change button", () => {
        const desiredAmount = 100;
        const error = null;
        const dispensedDenominations = null;
        const setDesiredAmountSpy = vi.fn();
        const dispenseChangeSpy = vi.fn();
        const onInputFocusSpy = vi.fn();
        render(
            <MantineProvider>
                <Dispenser
                    desiredAmount={desiredAmount}
                    dispensedDenominations={dispensedDenominations}
                    setDesiredAmount={setDesiredAmountSpy}
                    error={error}
                    dispenseChange={dispenseChangeSpy}
                    onInputFocus={onInputFocusSpy}
                />
            </MantineProvider>,
        );
        fireEvent.click(screen.getByText("Dispense")); // Use fireEvent to simulate a click event
        expect(dispenseChangeSpy).toHaveBeenCalledTimes(1);
    });

    it('should render with dispensed amount', () => {
        const desiredAmount = 100;
        const error = null;
        const dispensedDenominations = {
            20: 1,
            10: 1,
            5: 0,
            2: 0,
            1: 0,
        };
        const setDesiredAmountSpy = vi.fn();
        const dispenseChangeSpy = vi.fn();
        const onInputFocusSpy = vi.fn();
        render(
            <MantineProvider>
                <Dispenser
                    desiredAmount={desiredAmount}
                    dispensedDenominations={dispensedDenominations}
                    setDesiredAmount={setDesiredAmountSpy}
                    error={error}
                    dispenseChange={dispenseChangeSpy}
                    onInputFocus={onInputFocusSpy}
                />
            </MantineProvider>,
        );
        expect(screen.getByText("Dispensed Change:")).toBeInTheDocument();
        expect(screen.getByText("0x$1 0x$2 0x$5 1x$10 1x$20")).toBeInTheDocument();
    })
});
