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
        theme: {
          'back': '#212121',
          'front': '#b3b3b3',
          'lead': '#2781ed',
          'lead-text': '#ffffff',
          'line': '#404040',
          'skill-1': '#f7df1e',
          'skill-2': '#787CB5',
          'skill-3': '#ffe873',
        },
      },
    },
  ],
}