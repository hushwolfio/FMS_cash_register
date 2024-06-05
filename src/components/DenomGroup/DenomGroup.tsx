import type { FC } from 'react';
import type { Denominations } from '../../types';
import { DenomAdjuster } from '../DenomAdjuster';
import { Flex } from '@mantine/core';

interface DenomGroupProps {
    denominations: Denominations;
    setDenomAmount: (denomination: keyof Denominations, count: number) => void;
}

export const DenomGroup: FC<DenomGroupProps> = ({ denominations, setDenomAmount }) => (
    <Flex gap="md" wrap="wrap" justify="center">
        {Object.keys(denominations).map(denom => {
            const denominationKey = denom as unknown as keyof Denominations;
            const denomValue: number = denominations[denominationKey];
            return (
                <DenomAdjuster
                    value={denomValue}
                    key={denominationKey}
                    denom={denominationKey}
                    setDenomAmount={setDenomAmount}
                />
            )
        })}
    </Flex>
);