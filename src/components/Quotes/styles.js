import styled from "@emotion/styled"

export const BlockQuote = styled.blockquote`
  font-size: 1.5rem;
  max-width: 600px;
  font-weight: 300;
  line-height: 1.4;
  position: relative;
  margin: 0 auto;
  padding: 0.5rem;
  &:before,
  &:after {
    position: absolute;
    color: #ffe9c5;
    font-size: 8rem;
    width: 4rem;
    height: 4rem;
  }

  &:before {
    content: "“";
    left: -5rem;
    top: -2rem;
  }

  &:after {
    content: "”";
    right: -5rem;
    bottom: 1rem;
  }
`
