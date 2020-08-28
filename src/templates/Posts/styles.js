import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const Banner = styled.header`
  position: relative;
  width: 100%;
  height: 30rem;
  padding: 0 5%;
  overflow: hidden;
  backface-visibility: hidden;
`

export const Category = css`
  text-decoration: none;
  &:hover span {
    color: #eb6383;
    transition: all 0.3s ease-in-out;
  }
`

export const Tag = css`
  text-decoration: none;
  margin: 0 5px;
`
export const ChipCss = css`
  margin-bottom: 10px;
`

export const Author = css`
  margin: 0 15px 0 15px;
`
export const AuthorLink = styled.a`
  text-decoration: none;

  &:hover span {
    color: #eb6383;
    transition: 0.3s all ease-in-out;
  }
`

export const Avt = css`
  pointer-events: none;
`

export const Posts = styled.div`
  margin: 32px 0 0 0;
  .gatsby-image-wrapper {
    margin: 0 auto;
    img {
      opacity: 0.87 !important;
    }
  }
  .MuiAlert-root {
    margin: 30px 0;
  }
  a {
    text-decoration: none;
    color: #eb6383;
    &:hover {
      text-decoration: underline;
      transition: all 0.3s ease;
    }
  }
  code[class*="language-"],
  pre[class*="language-"] {
    font-size: 1.125rem;
  }
  & > p {
    font-family: "Open Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI",
      "Roboto", "Helvetica Neue", "Arial", "sans-serif", "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.125rem;
    letter-spacing: 0.03125rem;
    line-height: 1.7;
    img {
      width: 100%;
      max-width: 680px;
      display: block;
      margin: 0 auto;
      -webkit-user-drag: none;
    }
  }
  & > h2 {
    font-size: 1.5rem;
    letter-spacing: 0;
    font-weight: 500;
    line-height: 1.5;
  }

  & > h3 {
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 0.0094rem;
    line-height: 1.5;
  }
`

export const PostTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 32px 0 16px 0;
`

export const PostCategory = styled.div`
  margin-right: 8px;
  margin-bottom: 21px;
`
export const PostTag = styled.div`
  margin-bottom: 8px;
`

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  flex-wrap: wrap;
  align-items: center;
`

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const PostDate = styled.div`
  margin-bottom: 16px;
`
