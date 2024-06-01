import { useState } from "react";
import type { Denominations } from "../types";
import { INITIAL_DENOMINATIONS, DENOMINATIONS_KEYS } from "../components/constant";

// custom hook that handles the entire cash register logic
export const useCashRegister = () => {
	const [desiredAmount, setDesiredAmount] = useState<number | string>(0);
	const [denominations, setDenominations] = useState<Denominations>(INITIAL_DENOMINATIONS);
	const [error, setError] = useState<string | null>(null);
	const [dispensedDenominations, setDispensedDenominations] = useState<Denominations | null>(null);

	const totalAmount = Object.entries(denominations).reduce(
		(acc, [key, value]) => acc + Number(key) * value,
		0,
	);

	const setDenomAmount = (denomination: keyof Denominations, count: string | number) => {
		setDenominations((currentState) => ({
			...currentState,
			[denomination]: Number(count),
		}));
	};

	const dispenseChange = () => {
		// Calculate the total amount in the register
		const registerTotal = Object.entries(denominations).reduce(
			(acc, [denomination, count]) => acc + Number(denomination) * count,
			0
		);

		// Compare the desired amount with the total amount in the register
		if (Number(desiredAmount) > registerTotal) {
			setError("There is not enough money in the register, try a lower amount.");
			setDispensedDenominations(null);
			return;
		}

		// Check if the desired amount can be dispensed accurately with the available denominations
		let remaining = Number(desiredAmount);
		const availableDenominations = { ...denominations };
		const result: Denominations = { 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };

		for (const denomination of DENOMINATIONS_KEYS) {
			const denom = Number(denomination);
			const count = Math.min(Math.floor(remaining / denom), availableDenominations[denom]);
			result[denom] = count;
			remaining -= count * denom;
		}

		// If there's still remaining amount, it means the desired amount cannot be dispensed accurately
		if (remaining > 0) {
			setError("Cannot dispense the exact change with the available denominations. Try a different amount.");
			setDispensedDenominations(null);
			return;
		}

		// Dispense the change
		setDenominations((currentState) => {
			const newState = { ...currentState };
			Object.entries(result).forEach(([denomination, count]) => {
				newState[Number(denomination)] -= count;
			});
			return newState;
		});

		// Set the dispensed denominations
		setDispensedDenominations(result);

		// Reset the desired amount and error
		setError(null);
		setDesiredAmount(0);
	};

	return {
		denominations,
		totalAmount,
		error,
		desiredAmount,
		dispensedDenominations,
		setDesiredAmount,
		setDenomAmount,
		dispenseChange,
		setError,
		setDispensedDenominations,
	};
};
