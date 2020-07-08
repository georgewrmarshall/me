import React from "react"

import { SEO, Layout, Navbar, Hero, Shit, Bullshit, Contact, Footer } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Navbar />
      <Hero />
      <Shit />
      <Bullshit />
      <Contact />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
