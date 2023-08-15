import { create } from 'ipfs-http-client';
import { useState } from 'react';

import ImageUpload from '@/components/ImageUpload';
const auth =
  'Basic ' +
  Buffer.from(
    process.env.REACT_APP_INFURIA_PID + ':' + process.env.REACT_APP_INFURIA_API
  ).toString('base64');

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

const CreateNFT = () => {
  // const [modal] = useGlobalState('modal')
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [imgBase64, setImgBase64] = useState<string | ArrayBuffer>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !price || !description) return;

    // setGlobalState('modal', 'scale-0')
    // setGlobalState('loading', { show: true, msg: 'Uploading IPFS data...' })

    try {
      const created = await client.add(fileUrl);
      const metadataURI = `https://ipfs.io/ipfs/${created.path}`;
      const nft = { title, price, description, metadataURI };

      // setLoadingMsg('Intializing transaction...')
      setFileUrl(metadataURI);
      // await mintNFT(nft)

      resetForm();
      // setAlert('Minting completed...', 'green')
      window.location.reload();
    } catch (error) {
      console.log('Error uploading file: ', error);
      // setAlert('Minting failed...', 'red')
    }
  };

  const changeImage = async () => {
    // const reader = new FileReader();
    // const file = e.target.files?.[0];
    // file && reader.readAsDataURL(file);
    // reader.onload = (readerEvent) => {
    //   const file = readerEvent.target?.result;
    //   file && setImgBase64(file);
    //   file && setFileUrl(file as string);
    //   console.log(file, 'file');
    // };
  };

  const resetForm = () => {
    setFileUrl('');
    setImgBase64(undefined);
    setTitle('');
    setPrice('');
    setDescription('');
  };

  return (
    <div>
      <div className=''>
        <form className='flex flex-col'>
          <div className='flex flex-row justify-between items-center'>
            <p className='font-semibold text-gray-400'>Add NFT</p>
          </div>
          <ImageUpload
            id='nft-img'
            setImgSrc={changeImage}
            imageSrc={fileUrl}
          />

          <button
            type='submit'
            onClick={handleSubmit}
            className='flex flex-row justify-center items-center
              w-full text-white text-md bg-[#e32970]
              hover:bg-[#bd255f] py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              hover:bg-transparent hover:text-[#e32970]
              hover:border hover:border-[#bd255f]
              focus:outline-none focus:ring mt-5'
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
