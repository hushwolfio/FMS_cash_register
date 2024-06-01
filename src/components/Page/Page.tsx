import { Container, Center, Title } from "@mantine/core";
import { CashRegister } from "../CashRegister";
import type { FC } from "react";

export const Page: FC = () => (
	<Container size="lg">
		<Center>
			<Title order={1}>FMS Code Challenge: Cash Register</Title>
		</Center>
		<CashRegister />
	</Container>
);
