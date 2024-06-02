import { vi } from "vitest";
import { handleKeyDown } from "./helper";

describe("handleKeyDown", () => {
    it("should prevent the default action when the '-' symbol is pressed", () => {
        const event = {
            key: "-",
            keyCode: 189,
            preventDefault: vi.fn(),
        };
        handleKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
        expect(event.preventDefault).toHaveBeenCalled();
    });
});