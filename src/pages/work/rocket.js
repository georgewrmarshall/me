import React from 'react';

// Components
import { SEO, Layout, Navbar, Rocket, Footer } from '../../components';

const RocketPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Navbar />
      <Rocket />
      <Footer />
    </Layout>
  </>
);
export default RocketPage;
