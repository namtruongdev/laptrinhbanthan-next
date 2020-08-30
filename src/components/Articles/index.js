import React from "react"

import { PostWrap, PostList, PostItems } from "./styles"

import PostItem from "./postItem"
import Paginator from "../Paginator"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

const Article = ({ pageContext, data }) => {
  const posts = data.allMdx.edges
  let currentPage
  if (pageContext) currentPage = pageContext.currentPage

  return (
    <Container maxWidth="lg" css={PostWrap}>
      <Grid container spacing={4} css={PostList}>
        {posts.map((post, index) => {
          const details = {
            title: post.node.frontmatter.title,
            thumbnail: post.node.frontmatter.thumbnail,
            excerpt: post.node.frontmatter.excerpt,
            permalink: post.node.frontmatter.permalink,
            date: post.node.frontmatter.date,
            timeToRead: post.node.timeToRead,
          }

          return (
            <Grid item sm={6} md={4} xs={12} key={index} css={PostItems}>
              <PostItem
                data={details}
                pageContext={{ thumbnail: post.node.frontmatter.thumbnail }}
              />
            </Grid>
          )
        })}
      </Grid>

      {currentPage !== false ? (
        <Paginator currentPage={currentPage || 1} />
      ) : (
        <div></div>
      )}
    </Container>
  )
}

export default Article
