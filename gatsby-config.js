module.exports = {
  siteMetadata: {
    description: "Ritom Gupta | Full Stack Developer ⚡",
    locale: "en",
    title: "Ritom Gupta | Full Stack Developer ⚡",
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
          'skill-1': '#62bb47',
          'skill-2': '#fcb827',
          'skill-3': '#f6821f',
          'skill-4': '#e03a3c',
          'skill-5': '#963d97',
          'skill-6': '#009ddc'
        },
      },
    },
  ],
}