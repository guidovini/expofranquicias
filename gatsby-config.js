let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
require('dotenv').config({
  path: `.env.${activeEnv}`,
})
module.exports = {
  siteMetadata: {
    title: `Expofranquicias Ecuador`,
    description: `El lugar ideal para encontrar tu proximo negocio`,
    author: `Ecuafranquicias`,
    siteUrl: `https://expofranquiciasecuador.com/`,
  },
  plugins: [
    `gatsby-plugin-playground`,
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        // spreadsheetId: '1Lj6EfELbM2KuHC5lmftxrR9-j4tu9Oi-MrCvTKnatpQ', // test sheet id
        spreadsheetId: '1Lj6EfELbM2KuHC5lmftxrR9-j4tu9Oi-MrCvTKnatpQ', // production sheet id
        worksheetTitle: 'ListadoFranquicias',
        credentials: {
          type: 'service_account',
          project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
          private_key_id: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: process.env.GOOGLE_SHEETS_CLIENT_CERT_URL,
        },
      },
    },
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
        background_color: `#eee`,
        theme_color: `#eee`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
