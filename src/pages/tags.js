import React from "react"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { graphql, useStaticQuery, Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"

const CategoryLink = css`
  text-decoration: none;
  margin-right: 5px;
`

const Title = css`
  margin-top: 80px;
`

const Background = css`
  background: transparent !important;
`

const Tags = ({ location }) => {
  const { allTagsJson } = useStaticQuery(graphql`
    query {
      allTagsJson {
        totalCount
        edges {
          node {
            name
            slug
          }
        }
      }
      allMdx {
        edges {
          node {
            frontmatter {
              tag
            }
          }
        }
      }
    }
  `)

  const colors = [
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#F7CAC9",
    "#92A8D1",
    "#955251",
    "#B565A7",
    "#009B77",
    "#DD4124",
    "#D65076",
    "#45B8AC",
    "#EFC050",
    "#5B5EA6",
    "#9B2335",
    "#DFCFBE",
    "#55B4B0",
    "#E15D44",
    "#7FCDCD",
    "#BC243C",
    "#C3447A",
    "#98B4D4",
  ]

  const sizes = ["12px", "14px", "16px", "20px", "24px", "34px"]

  const createRandom = arr => arr[Math.floor(Math.random() * arr.length)]

  return (
    <>
      <SEO
        title="Thẻ"
        metaImage="https://res.cloudinary.com/alerthumg/image/upload/v1597821558/laptrinhbanthan/images/laptrinhbanthan.jpg"
        pathname={`${location.pathname}/`}
      />
      <Layout>
        <main id="main" className="main">
          <Container maxWidth="lg">
            <Box
              display="flex"
              bgcolor="background.paper"
              justifyContent="center"
              flexDirection="column"
              textAlign="center"
              css={Background}
            >
              <Typography variant="h4" component="h1" gutterBottom css={Title}>
                Thẻ
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                color="textSecondary"
              >
                {`Tổng: ${allTagsJson.totalCount}`}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                mt={10}
                mb={10}
              >
                {allTagsJson.edges.map((node, index) => {
                  const tag = {
                    name: node.node.name,
                    slug: node.node.slug,
                  }

                  return (
                    <Link
                      key={index}
                      to={`/tags/${tag.slug}`}
                      css={CategoryLink}
                    >
                      <Typography
                        component="span"
                        css={css`
                          color: ${createRandom(colors)};
                          font-size: ${createRandom(sizes)};
                        `}
                      >
                        {tag.name}
                      </Typography>
                    </Link>
                  )
                })}
              </Box>
            </Box>
          </Container>
        </main>
      </Layout>
    </>
  )
}

export default Tags
