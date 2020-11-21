const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: "https://mattmarch.co.uk/"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.join(__dirname, `src`, `posts`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: `mattmarch`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-advanced-sitemap`
  ],
}
