const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `posts`
const indexName = `Posts`

const pageQuery = `{
  pages: allMdx(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          permalink
          excerpt
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: {
      attributesToSnippet: [`excerpt:20`],
      attributeForDistinct: "slug",
      distinct: true,
    },
  },
]

module.exports = queries
