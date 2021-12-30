import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import BaseAnchor from "../components/BaseAnchor"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p style={{ margin: "0.33rem 1rem 3.3rem 1rem" }}>
      seattle-based bakery | lover of food &&nbsp;sweetness&nbsp;☆
    </p>

    <BaseAnchor
      href="https://www.instagram.com/withloveava_/"
      title="@withlovava_ Instagram"
      target="_blank"
    >
      <StaticImage
        src="../images/wla_logo_crop.jpg"
        width={182}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Hands reaching for Ava-shaped heart"
        style={{ border: `0px solid grey` }}
      />
    </BaseAnchor>
  </Layout>
)

export default IndexPage
