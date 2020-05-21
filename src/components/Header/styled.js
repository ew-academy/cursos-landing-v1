import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 3em;
  margin-bottom: 2em;
  ${media.greaterThan("huge")`
  width: 55%;
  margin: auto;
  padding: 1em 0 2em 0;
  `}
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const Navbar = styled.nav``
export const Brand = styled.img`
  width: 100px;
  ${media.lessThan("medium")`
    margin-bottom: 1em;
  `}
`

export const NavLink = styled(Link)`
  margin-left: 2em;
  &:hover {
    color: #00d138;
    transition: 0.2s;
  }
  .active {
    color: #00d138;
  }
`
export const NavLinkBtn = styled.a`
  margin-left: 2em;
  padding: 0.3em 1em;
  background: #00d138;

  &:hover {
    color: #fff;
    background: #05bf37;
    transition: 0.2s;
  }
`
