import React from "react"
import SEO from "../components/seo"

import loadable from "@loadable/component"

import { graphql, useStaticQuery, Link } from "gatsby"
import { css } from "@emotion/core"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"

const Container = loadable(() => import("@material-ui/core/Container"))
const Box = loadable(() => import("@material-ui/core/Box"))
const Typography = loadable(() => import("@material-ui/core/Typography"))
const Layout = loadable(() => import("../components/layout"))

const ArchiveLink = css`
  text-decoration: none;
  &:hover p {
    color: #eb6383;
    transition: all 0.3s ease;
  }
`

const Title = css`
  margin-top: 80px;
`

const Archives = ({ location }) => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              permalink
              date(formatString: "DD-MM-YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title="Lưu trữ"
        pathname={location.pathname}
        metaImage="https://res.cloudinary.com/alerthumg/image/upload/v1597821558/laptrinhbanthan/images/laptrinhbanthan.jpg"
      />
      <Layout>
        <main id="main" className="main">
          <Container maxWidth="lg">
            <Box textAlign="center" mb={10}>
              <Typography variant="h4" component="h1" gutterBottom css={Title}>
                Lưu trữ
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                color="textSecondary"
              >
                {`Tổng: ${allMdx.totalCount}`}
              </Typography>
            </Box>

            <Timeline align="alternate">
              {allMdx.edges.map((edge, index) => {
                const timelineItem = {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  permalink: edge.node.frontmatter.permalink,
                }

                return (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent>
                      <Typography color="textSecondary">
                        {timelineItem.date}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Link to={`/${timelineItem.permalink}`} css={ArchiveLink}>
                        <Typography color="textPrimary">
                          {timelineItem.title}
                        </Typography>
                      </Link>
                    </TimelineContent>
                  </TimelineItem>
                )
              })}
            </Timeline>
          </Container>
        </main>
      </Layout>
    </>
  )
}

export default Archives
