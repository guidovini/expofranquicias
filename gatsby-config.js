module.exports = {
  siteMetadata: {
    title: `Expofranquicias Ecuador`,
    description: `El lugar ideal para encontrar tu proximo negocio`,
    author: `Ecuafranquicias`,
    siteUrl: `https://expofranquiciasecuador.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-4790950-3',
        head: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Expofranquicias Ecuador`,
        short_name: `Expofranquicias Ecuador`,
        start_url: `/`,
        background_color: `#5386e4`,
        theme_color: `#5386e4`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
