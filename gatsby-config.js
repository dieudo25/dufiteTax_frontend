require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.dufitetax.be`,
    title: 'DufiteTax',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-sitemap",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    }, 
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `${ process.env.URL }`,
        queryLimit: 10000, // Defaults to 100
        collectionTypes: [`pages`],
        singleTypes: ["navigation", "footer"],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-139E1X8FMB', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        linkedin: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-linked-in', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
  ],
};
