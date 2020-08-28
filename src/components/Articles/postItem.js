import React, { useState, useEffect, useContext } from "react"
import loadable from "@loadable/component"
import { useImage } from "../../hooks"

import { PostTitle, PostTitleDark, PostInfo, PostTVR, Thumb } from "./styles"
import { Link } from "gatsby"

import { ThemeContext } from "../layout"

const Card = loadable(() => import("@material-ui/core/Card"))
const CardActionArea = loadable(() =>
  import("@material-ui/core/CardActionArea")
)
const CardActions = loadable(() => import("@material-ui/core/CardActions"))
const CardContent = loadable(() => import("@material-ui/core/CardContent"))
const Typography = loadable(() => import("@material-ui/core/Typography"))
const QueryBuilderRoundedIcon = loadable(() =>
  import("@material-ui/icons/QueryBuilderRounded")
)
const WhatshotRoundedIcon = loadable(() =>
  import("@material-ui/icons/WhatshotRounded")
)
const Skeleton = loadable(() => import("@material-ui/lab/Skeleton"))
const Img = loadable(() => import("gatsby-image"))
const ViewCounter = loadable(() => import("../ViewCounter"))

const PostItem = ({ data }) => {
  const { title, thumbnail, excerpt, permalink, date, timeToRead } = data
  const NodeListImages = useImage()

  const theme = useContext(ThemeContext)
  const [fluid, setFluid] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    const fluid = NodeListImages.filter(image => {
      const assets = image.node.childCloudinaryAsset
      let imageName
      if (assets !== null) {
        let imageNameSplit = assets.fluid.src.split("/")
        imageName = imageNameSplit[imageNameSplit.length - 1]
      }
      return assets !== null && imageName === thumbnail
    })

    setFluid(fluid)
  }, [NodeListImages, thumbnail])

  return (
    <Card>
      <CardActionArea>
        <Link to={`/${permalink}`}>
          {loading ? (
            <Skeleton variant="rect" height={216} />
          ) : (
            <>
              <Img
                fluid={fluid[0].node.childCloudinaryAsset.fluid}
                draggable={false}
                alt={title}
                css={Thumb}
              />
            </>
          )}
        </Link>
        <CardContent>
          <Link
            to={`/${permalink}`}
            css={theme === "light" ? PostTitle : PostTitleDark}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {loading ? <Skeleton /> : title}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary" component="p">
            {loading ? <Skeleton width="80%" /> : excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions css={PostInfo}>
        {loading ? (
          <Skeleton width="50%" />
        ) : (
          <>
            <Typography variant="caption" color="textSecondary">
              <PostTVR>
                <QueryBuilderRoundedIcon fontSize="inherit" />
                {` ${date}`}
              </PostTVR>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              <ViewCounter id={permalink} />
            </Typography>
            <Typography variant="caption" color="textSecondary">
              <PostTVR>
                <WhatshotRoundedIcon fontSize="inherit" />
                {` ${timeToRead} phút đọc`}
              </PostTVR>
            </Typography>
          </>
        )}
      </CardActions>
    </Card>
  )
}

export default PostItem
