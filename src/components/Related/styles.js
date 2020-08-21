import { css } from "@emotion/core"

export const PostList = css`
  margin-bottom: 15px;
`
export const PostItems = css`
  border-radius: 4px;
  overflow: hidden;
`
export const PostTitle = css`
  color: rgba(0, 0, 0, 0.87) !important;
  &:hover,
  :active {
    color: #eb6383 !important;
    text-decoration: none !important;
    transition: all ease-in-out 0.3s;
  }
`
export const PostTitleDark = css`
  color: rgba(255, 255, 255, 0.87) !important;
  &:hover,
  :active {
    text-decoration: none !important;
    color: #eb6383 !important;
    transition: all ease-in-out 0.3s;
  }
`

export const Thumb = css`
  max-height: 216px !important;
`
