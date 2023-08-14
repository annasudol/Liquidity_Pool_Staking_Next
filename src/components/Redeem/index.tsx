import { Spinner, useToast } from '@chakra-ui/react';
import {  useContract } from '@thirdweb-dev/react';
import { useBalance } from "@thirdweb-dev/react";
import { useEffect } from 'react';

import { Facet } from '@/components/Facet';

import { tokenERC20Address } from '@/utils/contracts';
export const Redeem = () => {
    const { data, isLoading } = useBalance(tokenERC20Address);


  const toast = useToast();
  const {
    contract: contractToken,
    isLoading: isLoadingToken,
    error: errMessage,
  } = useContract(tokenERC20Address);

  useEffect(() => {
    errMessage &&
      toast({
        title: 'Error',
        description: errMessage.toString(),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errMessage]);

  if (isLoadingToken) {
    return (
      <div className='flex justify-center items-center h-full'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </div>
    );
  }
  return (
    <div className='p-6 flex flex-col text-white'>
      <p>You have {data?.displayValue} {data?.symbol}</p>
      <Facet />
    </div>
  );
};
