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
  ],
};
