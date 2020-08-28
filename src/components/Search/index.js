import React, { useRef, useState } from "react"
import loadable from "@loadable/component"

import { SearchIcon, useStyles, quering, SearchContainer } from "./styles"
import {
  InstantSearch,
  connectStateResults,
  Configure,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

const Popper = loadable(() => import("@material-ui/core/Popper"))
const SearchRoundedIcon = loadable(() =>
  import("@material-ui/icons/SearchRounded")
)
const Paper = loadable(() => import("@material-ui/core/Paper"))
const Typography = loadable(() => import("@material-ui/core/Typography"))
const ClickAwayListener = loadable(() =>
  import("@material-ui/core/ClickAwayListener")
)
const Input = loadable(() => import("./input"))
const SearchResult = loadable(() => import("./SearchResult"))

const Search = () => {
  const anchorRef = useRef(null)
  const [arrowRef, setArrowRef] = useState(null)
  const [open, setOpen] = useState(false)

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  const handleClickButton = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const id = open ? "scroll-playground" : null

  const classes = useStyles()

  const Results = connectStateResults(({ searchState, children }) =>
    searchState && searchState.query ? (
      <div>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          css={quering}
        >
          Đang tìm kiếm cho "{searchState.query}"
        </Typography>
        {children}
      </div>
    ) : (
      ""
    )
  )
  const searchIndices = [{ name: `Posts`, title: `Posts` }]

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SearchContainer>
        <SearchRoundedIcon
          ref={anchorRef}
          onClick={handleClickButton}
          aria-describedby={id}
          css={SearchIcon}
        />

        <Popper
          id={id}
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-end"
          disablePortal={false}
          className={classes.popper}
          modifiers={{
            flip: {
              enabled: true,
            },
            preventOverflow: {
              enabled: true,
              boundariesElement: "scrollParent",
            },
            arrow: {
              enabled: true,
              element: arrowRef,
            },
          }}
        >
          <span className={classes.arrow} ref={setArrowRef} />
          <Paper className={classes.paper}>
            <InstantSearch searchClient={searchClient} indexName="Posts">
              <Configure hitsPerPage={5} distinct />
              <Input />
              <Results>
                <SearchResult indices={searchIndices} />
              </Results>
            </InstantSearch>
          </Paper>
        </Popper>
      </SearchContainer>
    </ClickAwayListener>
  )
}

export default Search
