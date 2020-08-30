import React from "react"
import { NavContainer, NavFlex, NavLi, NavLink } from "./styles"
import { graphql, useStaticQuery, Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Hidden from "@material-ui/core/Hidden"
import Search from "../Search"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      allCategoriesJson(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)
  return (
    <Container maxWidth="lg" css={NavContainer}>
      <NavFlex>
        <Hidden mdUp>
          <Link to="/" className="hvr-underline-from-center" css={NavLink}>
            Trang chủ
          </Link>
        </Hidden>
        <Hidden smDown>
          <nav>
            <ul>
              <NavLi>
                <Link
                  to="/"
                  className="hvr-underline-from-center"
                  css={NavLink}
                >
                  Trang chủ
                </Link>
              </NavLi>
              {data.allCategoriesJson.edges.map((link, index) => (
                <NavLi key={index}>
                  <Link
                    to={`/categories/${link.node.slug}`}
                    className="hvr-underline-from-center"
                    css={NavLink}
                  >
                    {link.node.name}
                  </Link>
                </NavLi>
              ))}
            </ul>
          </nav>
        </Hidden>
        <Search />
      </NavFlex>
    </Container>
  )
}

export default Nav
