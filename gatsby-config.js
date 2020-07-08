require("dotenv").config({
  path: `.env`,
})

const dynamicPlugins = []

if (process.env.GATSBY_PRODUCTION) {
  dynamicPlugins.push({
    resolve: "gatsby-plugin-firebase",
    options: {
      credentials: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DB_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_SB,
        messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
      },
    },
  })
  dynamicPlugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.VIEW_ID,
    },
  })
}

module.exports = {
  siteMetadata: {
    title: `OpenSourceAndMe`,
    description: `Your open source stats.`,
    siteUrl: `https://opensourceand.me/`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://codes.us4.list-manage.com/subscribe/post?u=0cf960d42e04bd50f7c21d709&amp;id=b09e53f081",
      },
    },

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DesignRant.app`,
        short_name: `DesignRant`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `./src/images/box.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ].concat(dynamicPlugins),
}
