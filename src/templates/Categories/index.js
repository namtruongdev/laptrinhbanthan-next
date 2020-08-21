import React from "react"
import SEO from "../../components/seo"

import loadable from "@loadable/component"
import { graphql } from "gatsby"

const Layout = loadable(() => import("../../components/layout"))
const Header = loadable(() => import("../../components/Header"))
const Article = loadable(() => import("../../components/Articles"))

const Category = ({ pageContext, data, location }) => {
  const strings = [`${pageContext.category.toUpperCase()}`]
  return (
    <>
      <SEO
        title={pageContext.category}
        metaImage="https://res.cloudinary.com/alerthumg/image/upload/v1597821558/laptrinhbanthan/images/laptrinhbanthan.jpg"
        pathname={location.pathname}
      />
      <Layout>
        <Header strings={strings} />
        <main id="main" className="main">
          <Article data={data} pageContext={{ currentPage: false }} />
        </main>
      </Layout>
    </>
  )
}

export default Category

export const PostCategoryQuery = graphql`
  query PostCategoryQuery($category: String!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            category
            thumbnail
            excerpt
            date(fromNow: true, locale: "vi-VN")
            permalink
          }
        }
      }
    }
  }
`
