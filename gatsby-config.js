// require('dotenv').config()
const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `shopless`,
    description: `change me`,
    author: `vanish`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon/apple-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: ['/'] }]
      }
    },
    // {
    //   resolve: `gatsby-plugin-transition-link`,
    //   options: {
    //     layout: require.resolve(`./src/layouts/index.js`)
    //   }
    // },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '98iq9hxm', //process.env.SANITY_PROJECT_ID,
        dataset: 'production', //process.env.SANITY_DATASET,
        token: 'skjQ08BmnLkpT5q4HKrpktA6ctGaL3zxRIgsP4qzExm0cSSIk4wsGQ8nqvaEsJLR5Np7F4NcYaFNEJEfOMlGs8xewdy1YjuCIHkTw0raRB0esBlVjAVwWLWNofFnhlpE0DDf7BMkxMI53NhTiRCj900s6E9KYOGnWLyH36FktbZvqUMy1O03',//process.env.SANITY_API_TOKEN,
        graphqlTag: 'default',
      }
    },

    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/account/*`] },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages')
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-plugin-postcss`,
      // options: {
      //   postCssPlugins: [
      //     require(`postcss-preset-env`)({ stage: 0 }),
      //     require('postcss-import'),
      //     require('postcss-nested'),
      //     require('postcss-cssnext'),
      //     require('postcss-calc'),
      //     require('postcss-discard-comments'),
      //     require('postcss-reporter')
      //   ]
      // }
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
