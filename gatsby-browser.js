import React from "react"
import Head from "./src/components/head"
import "firebase/database"

import "./src/styles/global.scss"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/command-line/prism-command-line.css"
import "prismjs/themes/prism-tomorrow.css"

if (
  window.location.hostname.indexOf("laptrinhbanthan.com") === -1 &&
  window.location.hostname.indexOf("localhost") === -1
) {
  window.location.replace("https://laptrinhbanthan.com")
}

export const wrapRootElement = ({ element }) => <Head>{element}</Head>

const colors = [
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
  "#DD4124",
  "#D65076",
  "#45B8AC",
  "#EFC050",
  "#5B5EA6",
  "#9B2335",
  "#DFCFBE",
  "#55B4B0",
  "#E15D44",
  "#7FCDCD",
  "#BC243C",
  "#C3447A",
  "#98B4D4",
  "#FF0000",
]

const createRandom = arr => arr[Math.floor(Math.random() * arr.length)]

const body = document.querySelector("body")
body.addEventListener("click", e => {
  const heart = document.createElement("div")
  const span = document.createElement("span")
  const spanClass = document.createAttribute("class")
  spanClass.value = "heart"

  span.setAttributeNode(spanClass)
  heart.appendChild(span)

  heart.style.fontSize = "10px"
  heart.style.position = "fixed"
  heart.style.left = `${e.x}px`
  heart.style.top = `${e.y}px`
  span.style.backgroundColor = createRandom(colors)

  heart.classList.add("bay-len-nao")

  body.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 1400)
})

console.log(
  "%c Xin đừng HACK web em! ^.^ %c",
  'font-family: "Opens San", Helvetica, Arial, sans-serif;font-size:28px;color:red;-webkit-text-fill-color:red;-webkit-text-stroke: 1px red;',
  "font-size:12px;color:#999999;"
)
