import React from "react"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { graphql, useStaticQuery, Link } from "gatsby"
import Chip from "@material-ui/core/Chip"
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded"
import { css } from "@emotion/core"

import Layout from "../components/layout"

const CategoryLink = css`
  text-decoration: none;
  margin-right: 15px;
  margin-bottom: 15px;
`

const Title = css`
  margin-top: 80px;
`

const Background = css`
  background: transparent !important;
`
const Category = ({ location }) => {
  const { allCategoriesJson, allMdx } = useStaticQuery(graphql`
    query {
      allCategoriesJson {
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
              category
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title="Danh mục"
        pathname={location.pathname}
        metaImage="https://res.cloudinary.com/alerthumg/image/upload/v1597821558/laptrinhbanthan/images/laptrinhbanthan.jpg"
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
                Danh mục
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                color="textSecondary"
              >
                {`Tổng: ${allCategoriesJson.totalCount}`}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                mt={10}
                mb={10}
              >
                {allCategoriesJson.edges.map((node, index) => {
                  const category = {
                    name: node.node.name,
                    slug: node.node.slug,
                  }

                  const count = allMdx.edges.filter(node => {
                    return node.node.frontmatter.category === category.name
                  })

                  return (
                    <Link
                      key={index}
                      to={`/categories/${category.slug}`}
                      css={CategoryLink}
                    >
                      <Chip
                        icon={<CategoryRoundedIcon />}
                        label={`${category.name} (${count.length})`}
                        color="secondary"
                        clickable
                      />
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

export default Category
