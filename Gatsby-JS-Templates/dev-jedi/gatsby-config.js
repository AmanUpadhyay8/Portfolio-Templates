/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata : {
    title : 'Devs are Jedi',
    description : 'Portfolio website of Aman Upadhyay, Web Developer, Technical Writer, Freelancer',
    copyright : ' Aman Upadhyay 2022',
    contact : 'devsarejedi@gmail.com'
  }
}
