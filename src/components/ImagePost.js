import React from "react"
import loadable from "@loadable/component"
import { usePostsImage } from "../hooks"

const Img = loadable(() => import("gatsby-image"))

const ImagePost = ({ thumb, alt }) => {
  const ImgList = usePostsImage()

  const data = ImgList.filter(item => {
    const assets = item.node.childCloudinaryAsset
    let imageName
    if (assets !== null) {
      let imageNameSplit = assets.fluid.src.split("/")
      imageName = imageNameSplit[imageNameSplit.length - 1]
    }
    return assets !== null && imageName === thumb
  })

  return (
    <Img
      fluid={data[0].node.childCloudinaryAsset.fluid}
      draggable={false}
      alt={alt}
    />
  )
}

export default ImagePost
