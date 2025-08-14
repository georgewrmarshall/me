import React from 'react';

import { SEO, Layout, Navbar, Rocket, Footer } from '../../components';

const RocketPage = () => (
  <>
    <SEO title="Rocket" />
    <Layout>
      <Navbar />
      <Rocket />
      <Footer />
    </Layout>
  </>
);
export default RocketPage;
