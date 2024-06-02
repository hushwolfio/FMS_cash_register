import type { FC } from "react";
import { NumberInput } from "@mantine/core";
import { handleKeyDown } from "../../helper";

interface ButtonProps {
	denom: string;
	value: number;
	setDenomAmount: (denomination: string, count: number) => void;
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
			onKeyDown={handleKeyDown}
			min={0}
			style={{
				width: 120
			}} />
	);
};
