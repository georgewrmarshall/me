import React from "react"

import { SEO, Layout, Navbar, Hero, Shit, Bullshit, Contact, Footer } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Homeless" />
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
