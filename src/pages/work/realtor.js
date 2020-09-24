import React from 'react';

// Components
import { SEO, Layout, Navbar, Realtor, Footer } from '../../components';

const RealtorPage = () => (
    <>
      <SEO title="Realtor" />
      <Layout>
        <Navbar />
        <Realtor />
        <Footer />
      </Layout>
    </>
  );
;

export default RealtorPage;
