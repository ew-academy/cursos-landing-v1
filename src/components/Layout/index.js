import React from "react"
import PropTypes from "prop-types"

import Footer from "../Footer"
import Header from "../Header"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
