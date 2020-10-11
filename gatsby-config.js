module.exports = {
  siteMetadata: {
    title: `C & S Games`,
    phone: `(270) 792-3249`,
    description: `We are proud to produce high quality custom-made Cornhole games and accessories in Bowling Green, KY.`,
    author: `blblan`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-lodash",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Epilogue`,
            variants: [
              `400`,
              `400i`,
              `600`,
              `600i`,
              `700`,
              `700i`,
              `900`,
              `900i`,
            ],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/fragments/*`, `**/markdown/*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/pages/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-altair-graphql`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `candsgames`,
        short_name: `candsgames`,
        start_url: `/`,
        background_color: `darkgreen`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.gif`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
