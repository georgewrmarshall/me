import React from 'react';

// Components
import { SEO, Layout, Navbar, Contact, Footer} from '../components';

const ContactPage = () => (
    <>
      <SEO title="Contact" />
      <Layout>
        <Navbar />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
;

export default ContactPage;
