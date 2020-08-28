import React from "react"
import { FacebookProvider, Comments, Like } from "react-facebook"

import { LikeButton } from "./styles"

const CommentsFacebook = ({ permalink }) => {
  return (
    <FacebookProvider appId="174766196750045">
      <LikeButton>
        <Like
          href={`https://laptrinhbanthan.com${permalink}`}
          colorScheme="dark"
          showFaces
          share
        />
      </LikeButton>
      <Comments
        href={`https://laptrinhbanthan.com${permalink}`}
        width="100%"
        colorScheme="dark"
        mobile={true}
      />
    </FacebookProvider>
  )
}

export default CommentsFacebook
