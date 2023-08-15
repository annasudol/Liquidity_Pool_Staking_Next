/* eslint-disable @next/next/no-img-element */
import { Spinner } from '@chakra-ui/react';
// import Loading from "@components/ui/Loading";
// import useDragFile from "@util/hooks/useDragFile";
import clsx from 'clsx';
import { FC } from 'react';

import type { ImageUploadProps } from './ImageUpload.types';

const ImageUpload: FC<ImageUploadProps> = ({
  id,
  isUploadingFile,
  imageSrc,
  setImgSrc,
  accept,
  error = false,
}) => {
  // const [imgSrc, setImgSrc] = useState<string | undefined>(imageSrc);

  // const onImageRemove = useCallback(() => {
  //   // onChange(null);
  // }, []);

  // const onImgRemove = () => {
  //   onImageRemove();
  //   setImgSrc(undefined);
  // };

  const changeImage = async (e: any) => {
    const reader = new FileReader();
    const file = e.target.files?.[0];
    file && reader.readAsDataURL(file);
    console.log(file, 'file1');

    reader.onload = (readerEvent) => {
      const file = readerEvent.target?.result;
      // file && setImgBase64(file);
      file && setImgSrc(file as string);
      console.log(file, 'file');
      // };
    };
  };

  // useEffect(() => {
  //   setImgSrc(imageSrc);
  // }, [imageSrc]);

  return (
    <div className='grid gap-y-1'>
      {imageSrc ? (
        <div className='h-38 overflow-hidden rounded-md group relative z-auto '>
          <img className='m-w-full w-full object-cover' src={imageSrc} alt='' />
        </div>
      ) : (
        <div className='mt-1 sm:col-span-2 sm:mt-0'>
          <div
            className={clsx(
              'flex justify-center rounded-md border border-dashed p-5 h-38',
              {
                'border-red-200': error,
                'border-blue-gray-300': !error,
              }
            )}
          >
            <div className='space-y-1 text-center h-[100px]'>
              {isUploadingFile ? (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                />
              ) : (
                <>
                  <svg
                    className='mx-auto h-12 w-12 text-white'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 48 48'
                    aria-hidden='true'
                  >
                    <path
                      d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div className='flex justify-center items-center text-sm text-white'>
                    <label
                      htmlFor={id}
                      className='relative text-white cursor-pointer rounded-md font-medium'
                    >
                      <span>Upload Image</span>
                      <input
                        id={id}
                        name={id}
                        type='file'
                        className='sr-only'
                        accept={accept}
                        multiple={false}
                        onChange={changeImage}
                      />
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
