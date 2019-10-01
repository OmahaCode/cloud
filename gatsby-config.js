module.exports = {
  siteMetadata: {
    title: `Cloudinary API`,
    siteUrl: `https://cloudinaryapi.com`,
    description: `Cloudinary API - Documentation and tutorials.`,
    author: `Neil K. Humphrey`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2196f3`,
        theme_color: `#2196f3`,
        display: `minimal-ui`,
        icon: `src/images/cloudinary_api_icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
