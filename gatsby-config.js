require("dotenv").config()

const gatsbyRemarkPlugins = [
  `gatsby-remark-responsive-iframe`,
  `gatsby-remark-copy-linked-files`,
  `gatsby-remark-external-links`,
  {
    resolve: `gatsby-remark-prismjs`,
    options: {
      maxWidth: 500,
    },
  },

  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 680,
      withWebp: true,
    },
  },
]

module.exports = {
  siteMetadata: {
    siteUrl: "https://laptrinhbanthan.com",
    title: `Lập trình bản thân`,
    description: `Tìm hiểu cách sử dụng công nghệ, tiện ích xung quanh bạn và khám phá những thứ hay ho trên Internet`,
    keywords: [
      "Lập trình bản thân",
      "Dương Nam Trường",
      "Tìm hiểu công nghệ",
      "Khám phá Internet",
      "Mã nguồn mở",
    ],
    author: `Dương Nam Trường`,
    twitter: `@truongduong99`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins,
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-images`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-external-links`,
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lập Trình Bản Thân`,
        short_name: `LTBT`,
        start_url: `/`,
        background_color: `#eb6383`,
        theme_color: `#eb6383`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
        apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `laptrinhbanthan/images/`,
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
        apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
        uploadFolder: "laptrinhbanthan/images/",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          databaseURL: process.env.databaseURL,
          projectId: process.env.projectId,
          storageBucket: process.env.storageBucket,
          messagingSenderId: process.env.messagingSenderId,
          appId: process.env.appId,
        },
      },
    },

    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
        chunkSize: 10000,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`vietnamese`],
            variants: [`300`, `400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
            subsets: [`vietnamese`],
            variants: [`300`, `400`, `500`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `https://laptrinhbanthan.com`,
        sitemap: `https://laptrinhbanthan.com/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/" +
                    edge.node.frontmatter.permalink,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/" +
                    edge.node.frontmatter.permalink,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { fields: frontmatter___date, order: DESC },
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        excerpt
                        permalink
                        date
                      }
                      html
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Lập Trình Bản Thân RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_TRACKINGID,
      },
    },

    `gatsby-plugin-offline`,
    {
      resolve: `@isamrish/gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "pub-8283643926060521",
        head: false,
      },
    },
  ],
}
