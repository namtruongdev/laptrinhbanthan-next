import React from "react"
import { Helmet } from "react-helmet"

export default function Head({ children }) {
  return (
    <>
      <Helmet>
        <meta property="fb:pages" content="838885076296704" />
        <noscript>
          {`
        <p>Vui lòng bật Javascript để tiếp tục sử dụng trang web.</p>
        <p>Please enable Javascript to continue using website</p>`}
        </noscript>
      </Helmet>
      {children}
    </>
  )
}
