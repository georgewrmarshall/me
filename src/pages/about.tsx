import React from 'react';

import { SEO, Layout, Navbar, About, Footer } from '../components';

const AboutPage = () => (
  <>
    <SEO title="About" />
    <Layout>
      <Navbar />
      <About />
      <Footer />
    </Layout>
  </>
);

export default AboutPage;
