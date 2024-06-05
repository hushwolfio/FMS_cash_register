import type { Denominations } from "../types";

// The denominations that are available in the cash register
export const DENOMINATIONS_KEYS: (keyof Denominations)[] = [20, 10, 5, 2, 1];

export const INITIAL_DENOMINATIONS: Denominations = { 20: 0, 10: 0, 5: 0, 2: 0, 1: 0};
