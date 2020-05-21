import React from "react"

// components
import * as S from "./styled"
import links from "../links"
import brand from "../../images/official-brand.png"

const Header = () => (
  <S.Wrapper>
    <S.Brand src={brand} alt="Brand" />
    <S.Navbar>
      {links.map((link, i) => (
        <S.NavLink to={link.url} key={i} activeClassName="active">
          {link.label}
        </S.NavLink>
      ))}
      <S.NavLinkBtn href="https://erickwendel.com/" target="__blank">Blog</S.NavLinkBtn>
    </S.Navbar>
  </S.Wrapper>
)

export default Header
