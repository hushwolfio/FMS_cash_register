import type { FC } from 'react';
import type { Denominations } from '../../types';
import { DenomAdjuster } from '../DenomAdjuster';
import { Flex } from '@mantine/core';

interface DenomGroupProps {
    denominations: Denominations;
    setDenomAmount: (denomination: string, count: number) => void;
}

export const DenomGroup: FC<DenomGroupProps> = ({ denominations, setDenomAmount }) => (
    <Flex gap="md" wrap="wrap" justify="center">
        {Object.keys(denominations).map((denom: string) => (
            <DenomAdjuster
                value={denominations[denom]}
                key={denom}
                denom={denom}
                setDenomAmount={setDenomAmount}
            />
        ))}
    </Flex>
);