import React from 'react';

// Components
import { SEO, Layout, Navbar, Work, Footer } from '../../components';

const WorkPage = () => (
    <>
      <SEO title="Work" />
      <Layout>
        <Navbar />
        <Work />
        <Footer />
      </Layout>
    </>
  );
;

export default WorkPage;
