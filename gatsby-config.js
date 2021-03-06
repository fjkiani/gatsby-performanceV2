/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Performance Testing",
    description: "This is Gatsby  Site",
    author: "@fjkiani",
    twitterUsername: "@fjkiani",
    image: "/twitter-img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Default to 100
    //     //   contentTypes : `jobs`, `projects`, `blogs`,
    //     //   singleType : `about`
    //     //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
    //     contentTypes: [],
    //     singleTypes: [],
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "ju09qc5o661w",
        accessToken: "c__cmTD3_IWZDJpdxlSO3sJUNefPAd-a569Y-7zLOAU",
      },
    },
    
  ],
}
