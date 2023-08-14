import { Link, Text } from '@chakra-ui/react';

import { etherscan_address } from '@/utils/contracts';

interface EtherScanMessageProps {
  title: string;
  blockHash: string;
}
export const EtherScanMessage: React.FC<EtherScanMessageProps> = ({
  title,
  blockHash,
}) => {

  return (
    <>
      <Text>{title}</Text>
      <Text>
        <Link href={etherscan_address(blockHash)} isExternal>
          View on Etherscan
        </Link>
      </Text>
    </>
  );
};
