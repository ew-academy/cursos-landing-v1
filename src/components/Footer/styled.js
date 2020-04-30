import styled from "styled-components"
import media from "styled-media-query"

export const Footer = styled.footer`
  background: #061008;
  padding: 2em 0;
`
export const Cols = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
  ${media.greaterThan("huge")`
    width: 50%;
  `}
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  ${media.lessThan("huge")`
    padding: 1em 3em;
  `}
`

export const ColTitle = styled.p`
  margin-bottom: 1em;
`

export const ColText = styled.p`
  line-height: 1.4;
  font-weight: 300;
  margin-bottom: 1em;
  font-size: 0.8rem;
  color: #c3c3c3;
`
export const ColTextIcons = styled.div`
  display: flex;
  img {
    width: 30px;
    margin-right: 1em;
  }
`

export const Copy = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.5;
  color: #c3c3c3;
  text-align: center;
  padding: 0 1em;
  margin-top: 1em;
  ${media.lessThan("medium")`
    padding: 0 3em;
  `}
`

export const Link = styled.a`
  color: #c3c3c3;
  font-weight: 300;
  line-height: 1.4;
  font-size: 0.8rem;
`
