module.exports = {
  siteMetadata: {
    title: `with love, Ava`,
    description: `Seattle-based | lover of food & sweetness ★`,
    author: `@tcjcodes`,
    siteUrl: `https://www.withloveava.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `with love, Ava website`,
        short_name: `with love, Ava`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons8-cookie-96.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // Google fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // https://fonts.google.com/specimen/La+Belle+Aurore?category=Handwriting&preview.text=with%20love,%20Ava&preview.text_type=custom#standard-styles
          `La Belle Aurore`,
          `cursive\:400`,
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        disableVendorPrefixes: true,
      },
    },
  ],
}
