import type { FC } from "react";
import { NumberInput } from "@mantine/core";

interface ButtonProps {
	denom: string;
	value: number;
	setDenomAmount: (denomination: string, count: string | number) => void;
}

export const DenomAdjuster: FC<ButtonProps> = ({ denom, value, setDenomAmount }) => {
	const onInputChange = (value: string | number): void =>
		setDenomAmount(denom, value);

	return (
		<NumberInput
			defaultValue={0}
			value={value}
			label={`Add/Remove $${denom}`}
			onChange={onInputChange}
			min={0}
			style={{
				width: 120
			}} />
	);
};
