import type { FC } from "react";
import { Container, Button, NumberInput, Stack, Flex, Text } from "@mantine/core";
import type { Denominations } from "../../types";
import { handleKeyDown } from "../../helper";

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
            <Stack gap="sm" justify="flex-start" align="center">
                <NumberInput
                    label="Amount to dispense"
                    value={desiredAmount}
                    onChange={setDesiredAmount}
                    onFocus={onInputFocus}
                    min={0}
                    onKeyDown={handleKeyDown}
                />
                <Button disabled={!desiredAmount} onClick={desiredAmount ? dispenseChange : undefined}>
                    Dispense
                </Button>
                {dispensedDenominations && (
                    <Flex gap="sm" justify="flex-start" align="center">
                        <Text c="green">Dispensed Change:</Text>
                        <Text fw={500}>
                            {Object.entries(dispensedDenominations)
                                .map(([key, value]) => `${value}x$${key}`)
                                .join(" ")}
                        </Text>
                    </Flex>
                )}
                {error && <Text c="red">{error}</Text>}
            </Stack>
        </Container>
    );
};
