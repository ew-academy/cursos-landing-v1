import React from "react"

// components
import * as S from "./styled"
import { translate } from "../../i18n/translate"
import brand from "../../images/official-brand.png"

const Header = ({ t }) => (
  <S.Wrapper>
    <S.Brand src={brand} alt="Brand" />
    <S.Navbar>
      <S.NavLink to="/" activeClassName="active">
        {t("navbar.home")}
      </S.NavLink>
      <S.NavLink to="/" activeClassName="active">
        {t("navbar.courses")}
      </S.NavLink>
      <S.NavLinkBtn href="https://erickwendel.com/" target="__blank">
        Blog
      </S.NavLinkBtn>
    </S.Navbar>
  </S.Wrapper>
)

export default translate(Header)
