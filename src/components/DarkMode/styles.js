import { css } from "@emotion/core"

export const SwitchModeSunnyIcon = css`
  position: fixed;
  right: 15px;
  bottom: 15px;
  visibility: hidden;
  transition: transform 0.5s ease-in-out;
  z-index: 99;
  background: #fef6cd;
  &:hover {
    background: #fdf2b4;
    transition: all 0.3s ease-in-out;
  }
`
export const SwitchModeMoonIcon = css`
  position: fixed;
  right: 15px;
  bottom: 15px;
  visibility: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 99;
  background: #2a222a;
  &:hover {
    background: #1c171c;
    transition: all 0.3s ease-in-out;
  }
`

export const Sunny = css`
  fill: #f9d71c;
`

export const Moon = css`
  fill: #b9a9ba;
`
