import React from "react"

import { SEO, Layout, Navbar, Footer, NotFound } from "../components"

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <Navbar />
      <NotFound />
      <Footer />
    </Layout>
  </>
)

export default NotFoundPage
