import React, { useState, useEffect, useContext } from "react"
import { useImage } from "../../hooks"

import { PostTitle, PostTitleDark, PostInfo, PostTVR, Thumb } from "./styles"
import { Link } from "gatsby"

import { ThemeContext } from "../layout"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import QueryBuilderRoundedIcon from "@material-ui/icons/QueryBuilderRounded"
import WhatshotRoundedIcon from "@material-ui/icons/WhatshotRounded"
import Skeleton from "@material-ui/lab/Skeleton"
import Img from "gatsby-image"
import ViewCounter from "../ViewCounter"

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
