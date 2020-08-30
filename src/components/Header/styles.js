import styled from "@emotion/styled"
import { css } from "@emotion/core"

// Navigation
export const NavContainer = css`
  height: 60px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`
export const NavFlex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const NavLi = styled.li`
  display: inline-block;
  list-style: none;
`

export const NavLink = css`
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
  font-size: 1.125rem;
  padding: 0.3125rem 0rem;
  margin: 0 25px;
  &:hover,
  &:focus,
  &:active {
    color: rgba(255, 255, 255, 0.5);
    transition: all ease-in-out 0.3s;
  }
`

// Hero

export const HeroImage = styled.div`
  background-image: url(https://res.cloudinary.com/alerthumg/image/upload/v1596350402/laptrinhbanthan/images/poster_gsrl5q.jpg);
  background-size: cover;
  z-index: 40;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 100%;
`
export const SiteName = css`
  color: rgba(255, 255, 255, 0.87);
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  @media (min-width: 320px) and (max-width: 415px) {
    & {
      font-size: 1.7rem;
    }
  }
  @media (min-width: 1280px) {
    & {
      font-size: 3.75rem;
    }
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    h1 {
      font-size: 3.3333rem;
    }
  }
  @media (min-width: 600px) and (max-width: 959px) {
    h1 {
      font-size: 2.9167rem;
    }
  }
  @media (min-width: 415px) and (max-width: 599px) {
    & {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 319px) {
    & {
      font-size: 1.4rem;
    }
  }
`
// export const HeroVideo = styled.span`
//   background-image: url(https://res.cloudinary.com/alerthumg/image/upload/v1596350402/laptrinhbanthan/images/poster_gsrl5q.jpg);
//   background-size: cover;
//   z-index: -1;
//   object-fit: cover;
//   width: 100%;
//   height: 90vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   pointer-events: none;
// `
export const HeroOverlay = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 50;
`
export const PreviewWave = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;

  @media (max-width: 768px) {
    & {
      height: 40px;
      min-height: 40px;
    }
  }
`

export const PreviewParallax = styled.g`
  & > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  & > use:nth-of-type(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  & > use:nth-of-type(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  & > use:nth-of-type(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  & > use:nth-of-type(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`

// Hero scroll

export const HeroContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease;
`
export const HeroContainerLight = css`
  background: #fafafa;
`
export const HeroContainerDark = css`
  background: #303030;
`

export const IconMouse = styled.i`
  display: block;
  width: 25px;
  height: 40px;

  border-radius: 25px;
  position: relative;

  &:before {
    position: absolute;
    left: 50%;
    content: "";
    width: 6px;
    height: 6px;
    margin-left: -3.5px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }
`
export const IconMouseLight = css`
  border: 2px solid rgba(0, 0, 0, 0.87);
  &:before {
    background: rgba(0, 0, 0, 0.87);
  }
`
export const IconMouseDark = css`
  border: 2px solid rgba(255, 255, 255, 0.87);
  &:before {
    background: rgba(255, 255, 255, 0.87);
  }
`

export const ButtonScroll = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
