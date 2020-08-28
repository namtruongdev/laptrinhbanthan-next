import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const PostWrap = css`
  margin-top: 60px;
`
export const PostList = css`
  margin-bottom: 15px;
`
export const PostItems = css`
  border-radius: 4px;
  overflow: hidden;
`
export const PostTitle = css`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  &:hover,
  :active {
    color: #eb6383;
    transition: all ease-in-out 0.3s;
  }
`
export const PostTitleDark = css`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.87);
  &:hover,
  :active {
    color: #eb6383;
    transition: all ease-in-out 0.3s;
  }
`

export const PostInfo = css`
  padding: 8px 16px;
`

export const PostTVR = styled.span`
  user-select: none;
  svg {
    vertical-align: -5%;
  }
`

export const Thumb = css`
  max-height: 216px !important;
`
