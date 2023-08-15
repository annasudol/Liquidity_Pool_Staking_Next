import { Dispatch } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ImageUploadProps {
  id: string;
  label?: string;
  name?: string;
  imageSrc?: string;
  setImgSrc: Dispatch<string | undefined>;
  isUploadingFile?: boolean;
  // onChange: (e: File | null) => void;
  error?: boolean;
}
