import React from 'react';

// Components
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
;

export default AboutPage;
