import React from "react"
import Head from "./src/components/head"
import "firebase/database"

import "./src/styles/global.scss"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/command-line/prism-command-line.css"
import "prismjs/themes/prism-tomorrow.css"

export const wrapRootElement = ({ element }) => <Head>{element}</Head>
