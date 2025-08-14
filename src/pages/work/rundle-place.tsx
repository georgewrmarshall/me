import React from 'react';

import { SEO, Layout, Navbar, RundlePlace, Footer } from '../../components';

const RundlePlacePage = () => (
  <>
    <SEO title="Rundle Place" />
    <Layout>
      <Navbar />
      <RundlePlace />
      <Footer />
    </Layout>
  </>
);
export default RundlePlacePage;
