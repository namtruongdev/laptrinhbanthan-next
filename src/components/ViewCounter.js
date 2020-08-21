import React, { useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
import VisibilityIcon from "@material-ui/icons/Visibility"
import styled from "@emotion/styled"

const PostViews = styled.span`
  user-select: none;
  svg {
    vertical-align: -5%;
  }
`

const ViewCounter = ({ id }) => {
  const [viewCount, setViewCount] = useState("")

  useEffect(() => {
    const onViews = newViews => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val())
    }

    firebase.database().ref(`/views`).child(id).on(`value`, onViews)

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews)
      }
    }
  }, [id])

  return (
    <PostViews>
      <VisibilityIcon fontSize="inherit" /> {viewCount ? viewCount : `0`} lượt
      xem
    </PostViews>
  )
}

export default ViewCounter
