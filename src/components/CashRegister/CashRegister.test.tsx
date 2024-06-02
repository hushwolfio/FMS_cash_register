import "../../matchMedia";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CashRegister } from "./CashRegister";
import { MantineProvider } from "@mantine/core";

describe("CashRegister", () => {
    it("should render correctly", () => {
        const { getByText } = render(
            <MantineProvider>
                <CashRegister />
            </MantineProvider>,
        );
        expect(getByText("Add/Remove $1")).toBeInTheDocument();
        expect(getByText("Add/Remove $2")).toBeInTheDocument();
        expect(getByText("Add/Remove $5")).toBeInTheDocument();
        expect(getByText("Add/Remove $10")).toBeInTheDocument();
        expect(getByText("Add/Remove $20")).toBeInTheDocument();
    });
});
