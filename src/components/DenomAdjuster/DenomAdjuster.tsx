import type { FC } from "react";
import { NumberInput } from "@mantine/core";
import type { Denominations } from "../../types";

interface ButtonProps {
	denom: keyof Denominations;
	value: number;
	setDenomAmount: (denomination: keyof Denominations, count: number) => void;
}

export const DenomAdjuster: FC<ButtonProps> = ({ denom, value, setDenomAmount }) => {
	const onInputChange = (value: string | number): void => {
		setDenomAmount(denom, Number(value));
	}

	return (
		<NumberInput
			defaultValue={0}
			value={value}
			label={`Add/Remove $${denom}`}
			onChange={onInputChange}
			allowDecimal={false}
			allowNegative={false}
			min={0}
			style={{
				width: 120
			}} />
	);
};
