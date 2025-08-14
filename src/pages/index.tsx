import React from 'react';

// Components
import { SEO, Layout, Navbar, Home } from '../components';

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Navbar />
      <Home />
    </Layout>
  </>
);

export default IndexPage;
