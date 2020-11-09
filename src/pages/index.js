import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/page-3/">Go to page 3</Link> <br />
    <Link to="/page-4/">Go to page 4</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <a href="https://www.google.com" target="_new">
      Google
    </a>
    <br />
    <a href="https://guidingdigital.com" target="_new">
      Guiding Digital
    </a>
    <br />
    <a href="https://youtube.com" target="_new">
      Youtube
    </a>
    <br />
  </Layout>
)

export default IndexPage
