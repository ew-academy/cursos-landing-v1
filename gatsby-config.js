module.exports = {
  siteMetadata: {
    title: `Erick Wendel | Treinamentos`,
    description: `Javascript, Node.js e cloud computing. Aprenda programação de forma divertida e fácil com Erick Wendel`,
    author: `@erickwendel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [300, 500, 700],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erick Wendel | Treinamentos`,
        short_name: `EW.IT`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/ew.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
