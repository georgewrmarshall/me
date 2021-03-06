module.exports = {
  pathPrefix: '/me',
  siteMetadata: {
    title: `George Marshall - Front-end Developer &amp; Designer`,
    description: `I am a Front-end developer with a background in design. I like to approach design and development with a component driven methodology. Let's talk.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        background_color: `#8932D9`,
        theme_color: `#8932D9`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:900`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    'gatsby-plugin-use-dark-mode',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-179014368-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
