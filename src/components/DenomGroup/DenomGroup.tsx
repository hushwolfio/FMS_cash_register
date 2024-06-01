import type { FC } from 'react';
import type { Denominations } from '../../types';
import { DenomAdjuster } from '../DenomAdjuster';
import { Flex } from '@mantine/core';

interface DenomGroupProps {
    denominations: Denominations;
    setDenomAmount: (denomination: string, count: string | number) => void;
}

export const DenomGroup: FC<DenomGroupProps> = ({ denominations, setDenomAmount }) => (
    <Flex gap="md" direction="row" wrap="wrap" justify="center">
        {Object.keys(denominations).map((denom) => (
            <DenomAdjuster
                value={denominations[denom]}
                key={denom}
                denom={denom}
                setDenomAmount={setDenomAmount}
            />
        ))}
    </Flex>
);