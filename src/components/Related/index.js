import React, { useEffect, useState, useContext } from "react"
import loadable from "@loadable/component"
import { useImage } from "../../hooks"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Grid } from "@material-ui/core"

import { PostList, PostItems, PostTitle, PostTitleDark, Thumb } from "./styles"
import { ThemeContext } from "../layout"
const Card = loadable(() => import("@material-ui/core/Card"))
const CardActionArea = loadable(() =>
  import("@material-ui/core/CardActionArea")
)
const CardContent = loadable(() => import("@material-ui/core/CardContent"))
const Typography = loadable(() => import("@material-ui/core/Typography"))
const Skeleton = loadable(() => import("@material-ui/lab/Skeleton"))
const Img = loadable(() => import("gatsby-image"))

const Related = ({ category, permalink }) => {
  const theme = useContext(ThemeContext)
  const [loading, setLoading] = useState(true)
  const [recentThreeRelated, setRecentRelated] = useState([])
  const NodeListImages = useImage()

  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              permalink
              category
              thumbnail
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    const relates = allMdx.edges.filter(node => {
      return (
        node.node.frontmatter.category === category &&
        node.node.frontmatter.permalink !== permalink
      )
    })
    const recentThreeRelated =
      relates.length > 3 ? relates.slice(0, 3) : relates

    setRecentRelated(recentThreeRelated)
  }, [NodeListImages, allMdx.edges, category, permalink])

  return (
    <Grid container spacing={4} css={PostList}>
      {recentThreeRelated.map((item, index) => {
        const result = {
          title: item.node.frontmatter.title,
          permalink: item.node.frontmatter.permalink,
          thumbnail: item.node.frontmatter.thumbnail,
        }

        const fluid = NodeListImages.filter(image => {
          const assets = image.node.childCloudinaryAsset
          let imageName
          if (assets !== null) {
            let imageNameSplit = assets.fluid.src.split("/")
            imageName = imageNameSplit[imageNameSplit.length - 1]
          }
          return assets !== null && imageName === result.thumbnail
        })

        return (
          <Grid key={index} item sm={6} md={4} xs={12} css={PostItems}>
            <Card>
              <CardActionArea>
                <Link to={`/${result.permalink}`}>
                  {loading ? (
                    <Skeleton variant="rect" height={216} />
                  ) : (
                    <>
                      <Img
                        fluid={fluid[0].node.childCloudinaryAsset.fluid}
                        draggable={false}
                        alt={result.title}
                        css={Thumb}
                      />
                    </>
                  )}
                </Link>
                <CardContent>
                  <Link
                    to={`/${result.permalink}`}
                    css={theme === "light" ? PostTitle : PostTitleDark}
                  >
                    <Typography gutterBottom variant="h6" component="h3">
                      {loading ? <Skeleton /> : result.title}
                    </Typography>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Related
