module.exports = {
  siteMetadata: {
    description: "Personal page of Ritom Gupta",
    locale: "en",
    title: "Ritom Gupta",
    formspreeEndpoint: "https://formspree.io/f/xnqlkdlv",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-green",
      },
    },
    `gatsby-plugin-sharp`
  ],
}