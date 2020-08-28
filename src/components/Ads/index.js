import React, { useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Adsene = css`
  display: block;
  text-align: center;
`
const AdseneContainer = styled.div`
  margin-bottom: 30px;
`

const Ads = () => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  })

  return (
    <AdseneContainer>
      <ins
        className="adsbygoogle"
        css={Adsene}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-8283643926060521"
        data-ad-slot="3613276294"
      ></ins>
    </AdseneContainer>
  )
}
export default Ads
