exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allCategoriesJson {
        edges {
          node {
            name
            slug
          }
        }
      }
      allTagsJson {
        edges {
          node {
            name
            slug
          }
        }
      }
      allMdx {
        totalCount
        edges {
          node {
            frontmatter {
              title
              thumbnail
              category
              excerpt
              permalink
              date(fromNow: true, locale: "vi-VN")
              dateOrigin: date
              tag
            }
            body
          }
        }
      }
    }
  `)
  data.allCategoriesJson.edges.map(edge => {
    const slug = edge.node.slug
    const category = edge.node.name
    actions.createPage({
      path: `/categories/${slug}`,
      component: require.resolve(`./src/templates/Categories`),
      context: {
        category: category,
      },
    })
  })

  data.allTagsJson.edges.map(edge => {
    const slug = edge.node.slug
    const tag = edge.node.name
    actions.createPage({
      path: `/tags/${slug}`,
      component: require.resolve(`./src/templates/Tags`),
      context: {
        tagg: tag,
      },
    })
  })

  data.allMdx.edges.map(node => {
    const permalink = node.node.frontmatter.permalink
    const category = node.node.frontmatter.category
    const tag = node.node.frontmatter.tag
    const title = node.node.frontmatter.title
    const thumbnail = node.node.frontmatter.thumbnail
    const date = node.node.frontmatter.date
    const dateOrigin = node.node.frontmatter.dateOrigin
    const body = node.node.body
    const excerpt = node.node.frontmatter.excerpt
    actions.createPage({
      path: `/${permalink}`,
      component: require.resolve(`./src/templates/Posts`),
      context: {
        category: category,
        tag: tag,
        title: title,
        excerpt: excerpt,
        permalink: permalink,
        thumbnail: thumbnail,
        date: date,
        dateOrigin: dateOrigin,
        body: body,
      },
    })
  })

  const postPerPage = 9
  const totalPosts = data.allMdx.totalCount
  const numberOfPages = Math.ceil(totalPosts / postPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    if (isFirstPage) return

    actions.createPage({
      path: `/trang-${currentPage}`,
      component: require.resolve(`./src/templates/Pagination`),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        currentPage,
      },
    })
  })
}
