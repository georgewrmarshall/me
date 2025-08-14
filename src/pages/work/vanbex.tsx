import React from 'react';

import { SEO, Layout, Navbar, Vanbex, Footer } from '../../components';

const VanbexPage = () => (
  <>
    <SEO title="Vanbex" />
    <Layout>
      <Navbar />
      <Vanbex />
      <Footer />
    </Layout>
  </>
);
export default VanbexPage;
