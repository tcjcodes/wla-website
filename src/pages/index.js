import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledHeader = styled.h1`
  font-family: "La Belle Aurore", "Bradley Hand", "Brush Script MT", cursive;
  font-weight: 400;
  font-size: 3rem;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/*<h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <hr />*/}
    <p style={{ margin: "0.33rem 1rem 3.3rem 1rem" }}>
      seattle-based baked goods | lover of food &&nbsp;sweetness&nbsp;☆
    </p>

    <a
      href="https://www.instagram.com/withloveava_/"
      title="@withlovava_ Instagram"
      style={{
        color: `#4d4d4d`,
        textDecoration: `none`,
      }}
    >
      {/*<StyledHeader>with love, Ava</StyledHeader>*/}
      <StaticImage
        src="../images/wla_logo_crop.jpg"
        width={182}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Hands reaching for Ava-shaped heart"
        style={{ border: `0px solid grey` }}
      />
    </a>
    {/*<p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>*/}
  </Layout>
)

export default IndexPage
