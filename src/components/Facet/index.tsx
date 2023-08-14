import { Spinner, useToast } from '@chakra-ui/react';
import {
  useAddress,
  useContract,
  useContractRead
} from '@thirdweb-dev/react';
import { useEffect } from 'react';

// import { ITokenName } from '@/type/token.types';
import { tokenERC20Address } from '@/utils/contracts';

export const Facet = () => {
  // const [balance, setBalance] = useState<number>(0);

  const address = useAddress();
  const toast = useToast();
  const {
    contract: contractToken,
    isLoading: isLoadingToken,
    error: ErrorToken,
  } = useContract(tokenERC20Address);

  // const { contract_ERC20 } = useContractRead(contractToken, 'allowance', address);
  // const { mutateAsync, isLoading, error } = useContractWrite(contractToken, 'mint');
 const { data: totalSupply } = useContractRead(contractToken, "maxTotalSupply");
  //  const { mutateAsync } = useContractWrite(
  //   contractToken,
  //   "mint",
  // );
const handleMint = async()=>{
  console.log(contractToken)
  //return contractToken?.erc20.mint(200)
  // contractToken?.mint(200).then(res=> console.log(res)).catch(err=> console.log(err))

}
  useEffect(() => {
    ErrorToken &&
      toast({
        title: 'Error',
        description: 'Error, please try later',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ErrorToken]);

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
    <div className='p-6 flex flex-col'>
    <button onClick={handleMint}> Send Transaction</button>

    </div>
  );
};

