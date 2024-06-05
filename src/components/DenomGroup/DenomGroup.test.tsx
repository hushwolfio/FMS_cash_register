import "../../matchMedia";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DenomGroup } from "./DenomGroup";
import { MantineProvider } from "@mantine/core";
import type { Denominations } from "../../types";

describe("DenomGroup", () => {
    const denominations: Denominations = {
        1: 1,
        2: 3,
        5: 1,
        10: 1,
        20: 1,
    };
    const setDenomAmountSpy = vi.fn();
    it("should render with denominations", () => {
        const { getByText } = render(
            <MantineProvider>
                <DenomGroup
                    denominations={denominations}
                    setDenomAmount={setDenomAmountSpy}
                />
            </MantineProvider>,
        );
        expect(getByText("Add/Remove $1")).toBeInTheDocument();
        expect(getByText("Add/Remove $2")).toBeInTheDocument();
        expect(getByText("Add/Remove $5")).toBeInTheDocument();
        expect(getByText("Add/Remove $10")).toBeInTheDocument();
        expect(getByText("Add/Remove $20")).toBeInTheDocument();
    });
});
