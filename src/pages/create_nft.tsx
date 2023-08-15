import * as React from 'react';

import CreateNFTForm from '@/components/CreateNFTForm';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
     <CreateNFTForm />
    </Layout>
  );
}
