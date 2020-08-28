import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"
import { Pagination, PaginationItem } from "@material-ui/lab"
import { css } from "@emotion/core"

const PostPagigator = css`
  & > ul {
    justify-content: center;
  }
`

const Paginator = ({ currentPage }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        totalCount
      }
    }
  `)
  const postPerPage = 9
  const totalPosts = data.allMdx.totalCount
  const numberOfPages = Math.ceil(totalPosts / postPerPage)

  return (
    <Pagination
      css={PostPagigator}
      color="secondary"
      page={currentPage}
      count={numberOfPages}
      renderItem={item => (
        <PaginationItem
          component={Link}
          to={`${item.page === 1 ? "/" : `/trang-${item.page}`}`}
          {...item}
        />
      )}
    ></Pagination>
  )
}

export default Paginator
