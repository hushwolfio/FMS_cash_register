import type { FC } from "react";
import { Container, Button, NumberInput, Flex, Text } from "@mantine/core";
import type { Denominations } from "../../types";

interface DispenserProps {
    desiredAmount: string | number;
    dispensedDenominations: Denominations | null;
    error: string | null;
    setDesiredAmount: (value: string | number) => void;
    dispenseChange: () => void;
    onInputFocus: () => void;
}

export const Dispenser: FC<DispenserProps> = ({
    desiredAmount,
    dispensedDenominations,
    error,
    setDesiredAmount,
    dispenseChange,
    onInputFocus,
}) => {
    return (
        <Container size="md">
            <Flex gap="sm" direction="column" justify="flex-start" align="center">
                <NumberInput
                    label="Dispense Change"
                    value={desiredAmount}
                    onChange={setDesiredAmount}
                    onFocus={onInputFocus}
                    min={0}
                />
                <Button onClick={desiredAmount ? dispenseChange : undefined}>
                    Dispense
                </Button>
                {dispensedDenominations && (
                    <Flex gap="sm" direction="row" justify="flex-start" align="center">
                        <Text c="green">Dispensed Change:</Text>
                        <Text fw={500}>
                            {Object.entries(dispensedDenominations)
                                .map(([key, value]) => `${value}x$${key}`)
                                .join(" ")}
                        </Text>
                    </Flex>
                )}
                {error && <Text c="red">{error}</Text>}
            </Flex>
        </Container>
    );
};
