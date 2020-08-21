import React from "react"
import SEO from "../../components/seo"
import loadable from "@loadable/component"
import { graphql } from "gatsby"

const Article = loadable(() => import("../../components/Articles"))
const Layout = loadable(() => import("../../components/layout"))
const Header = loadable(() => import("../../components/Header"))

const IndexPage = ({ pageContext, data, location }) => {
  const strings = [
    "LẬP TRÌNH <span style='font-weight: 400'>BÀN CHÂN</span>",
    "LẬP TRÌNH <span style='font-weight: 400'>BẢN THÂN</span>",
  ]
  return (
    <>
      <SEO
        title={`Trang ${pageContext.currentPage}`}
        pathname={location.pathname}
        metaImage="https://res.cloudinary.com/alerthumg/image/upload/v1597821558/laptrinhbanthan/images/laptrinhbanthan.jpg"
      />
      <Layout>
        <Header strings={strings} />
        <main id="main" className="main">
          <Article data={data} pageContext={pageContext} />
        </main>
      </Layout>
    </>
  )
}

export const PaginationQuery = graphql`
  query PaginationQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
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

export default IndexPage
