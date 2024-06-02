import type { FC } from "react";
import { Flex, Text, Stack } from "@mantine/core";
import { useCashRegister } from "../../hooks/useCashRegister";
import { DenomGroup } from "../DenomGroup";
import { Dispenser } from "../Dispenser";

export const CashRegister: FC = () => {
	const {
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
	} = useCashRegister();

	const onInputFocus = () => {
		setError(null);
		setDispensedDenominations(null);
	}

	return (
		<Stack gap="sm">
			<Flex gap="sm" justify="center" align="center"><Text c="yellow">Cash Register Total: ${totalAmount}</Text>
				<Text fw={500}>{Object.entries(denominations)
					.map(([key, value]) => `${value}x$${key}`)
					.join(" ")}</Text>
			</Flex>
			<DenomGroup denominations={denominations} setDenomAmount={setDenomAmount} />
			<Dispenser
				desiredAmount={desiredAmount}
				dispensedDenominations={dispensedDenominations}
				error={error}
				setDesiredAmount={setDesiredAmount}
				dispenseChange={dispenseChange}
				onInputFocus={onInputFocus}
			/>
		</Stack>
	);
};

export default CashRegister;
