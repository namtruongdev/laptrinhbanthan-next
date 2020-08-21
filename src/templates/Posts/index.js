import React from "react"
import SEO from "../../components/seo"

import loadable from "@loadable/component"

import {
  Banner,
  Tag,
  ChipCss,
  Category,
  Author,
  AuthorLink,
  Avt,
  Posts,
  PostTop,
  PostCategory,
  PostTag,
  PostInfo,
  PostAuthor,
  PostDate,
} from "./styles"

import { Link, graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from "@emotion/core"

const Container = loadable(() => import("@material-ui/core/Container"))
const Typography = loadable(() => import("@material-ui/core/Typography"))
const Chip = loadable(() => import("@material-ui/core/Chip"))
const Avatar = loadable(() => import("@material-ui/core/Avatar"))
const Badge = loadable(() => import("@material-ui/core/Badge"))
const Layout = loadable(() => import("../../components/layout"))
const Counter = loadable(() => import("../../components/Counter"))
const Nav = loadable(() => import("../../components/Header/nav"))
const CommentsFacebook = loadable(() => import("../../components/Comments"))
const Related = loadable(() => import("../../components/Related"))
const Ads = loadable(() => import("../../components/Ads"))

const Post = ({ pageContext, path, data, location }) => {
  const thumbImage = data.file.childCloudinaryAsset.fluid.src

  const tagSlug = data.allTagsJson.edges
  const categorySlug = data.allCategoriesJson.edges[0].node.slug

  const StyledBadge = withStyles(theme => ({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }))(Badge)

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://laptrinhbanthan.com/${pageContext.permalink}`,
    },
    headline: `${pageContext.title}`,
    description: `${pageContext.excerpt}`,
    image: `${thumbImage}`,
    author: {
      "@type": "Person",
      name: "Dương Nam Trường",
    },
    publisher: {
      "@type": "Organization",
      name: "Lập Trình Bản Thân",
      logo: {
        "@type": "ImageObject",
        url:
          "https://res.cloudinary.com/alerthumg/image/upload/v1597849622/laptrinhbanthan/images/logo.png",
      },
    },
    datePublished: `${pageContext.dateOrigin}`,
  }

  return (
    <>
      <SEO
        title={pageContext.title}
        description={pageContext.excerpt}
        pathname={location.pathname}
        metaType="article"
        metaImage={thumbImage}
        schema={schema}
      />
      <Layout>
        <Counter id={path} />
        <Banner>
          <Nav />

          <span
            css={css`
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              z-index: -1;
              background: black url(${thumbImage}) no-repeat center center;
              transform: translate3d(0, 0, 0) scale(1.25);
              background-size: cover;
              object-fit: cover;

              animation-name: scale;
              animation-duration: 6.5s;
              animation-fill-mode: forwards;
            `}
          />
        </Banner>
        <main id="main" className="main">
          <Container maxWidth="md" component="article">
            <PostTop>
              <PostCategory>
                <Link to={`/categories/${categorySlug}`} css={Category}>
                  <Typography variant="h6" component="span" color="textPrimary">
                    {pageContext.category}
                  </Typography>
                </Link>
              </PostCategory>
              <PostTag>
                {tagSlug.map((item, index) => (
                  <Link key={index} to={`/tags/${item.node.slug}`} css={Tag}>
                    <Chip
                      size="small"
                      label={`#${item.node.name}`}
                      clickable
                      color="secondary"
                      variant="outlined"
                      css={ChipCss}
                    />
                  </Link>
                ))}
              </PostTag>
            </PostTop>
            <div>
              <Typography variant="h4" component="h1">
                {pageContext.title}
              </Typography>
              <PostInfo>
                <PostAuthor>
                  <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Dương Nam Trường"
                      src="https://res.cloudinary.com/alerthumg/image/upload/v1597669015/laptrinhbanthan/images/duongnamtruong.jpg"
                      css={Avt}
                    />
                  </StyledBadge>
                  <Typography
                    variant="body1"
                    component="span"
                    css={Author}
                    color="textSecondary"
                  >
                    Bởi{" "}
                    <AuthorLink
                      href="https://www.facebook.com/truongduongg99/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Typography
                        component="span"
                        color="textSecondary"
                        variant="body1"
                      >
                        Dương Nam Trường
                      </Typography>
                    </AuthorLink>
                  </Typography>
                </PostAuthor>
                <PostDate>
                  <Typography
                    variant="body1"
                    component="span"
                    color="textSecondary"
                  >
                    {pageContext.date}
                  </Typography>
                </PostDate>
              </PostInfo>
            </div>

            <Posts>
              <Ads />
              <MDXRenderer>{pageContext.body}</MDXRenderer>
              <Ads />
              <Related
                category={pageContext.category}
                permalink={pageContext.permalink}
              />
              <CommentsFacebook permalink={path}></CommentsFacebook>
            </Posts>
          </Container>
        </main>
      </Layout>
    </>
  )
}

export const postQuery = graphql`
  query postQuery($category: String!, $tag: [String]!, $thumbnail: String!) {
    file(name: { eq: $thumbnail }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    allCategoriesJson(filter: { name: { eq: $category } }) {
      edges {
        node {
          slug
        }
      }
    }
    allTagsJson(filter: { name: { in: $tag } }) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
export default Post
