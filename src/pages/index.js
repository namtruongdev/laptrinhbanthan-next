import React from "react"
import loadable from "@loadable/component"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/Header"
const Article = loadable(() => import("../components/Articles"))

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 9) {
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
  `)

  const strings = [
    "LẬP TRÌNH <span style='font-weight: 400'>BÀN CHÂN</span>",
    "LẬP TRÌNH <span style='font-weight: 400'>BẢN THÂN</span>",
  ]

  return (
    <>
      <SEO
        title="Trang chủ"
        metaImage="https://res.cloudinary.com/alerthumg/image/upload/v1597821558/laptrinhbanthan/images/laptrinhbanthan.jpg"
        pathname={location.pathname}
      />
      <Layout>
        <Header strings={strings} />
        <main id="main" className="main">
          <Article data={data} />
        </main>
      </Layout>
    </>
  )
}

export default IndexPage
