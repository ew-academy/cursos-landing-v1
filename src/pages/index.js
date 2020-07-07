import React from "react"

// @imports
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import * as S from "../styles/home"
import { infoCards } from "../mocks/info-cards"
import { translate } from "../i18n/translate"

// icons
import { Play } from "@styled-icons/boxicons-regular"
import { ArrowRight } from "@styled-icons/feather"
import Courses from "../components/Courses"

const IndexPage = ({ t }) => (
  <Layout>
    <SEO title={t("home.titlePage")} />
    <div className="slider">
      <Slider />
    </div>

    <S.Cards>
      {infoCards.map((card, i) => (
        <S.Card key={i}>
          <S.Icon src={card.icon} />
          <S.CardTitle>{card.title}</S.CardTitle>
          <S.CardDescription>{card.description}</S.CardDescription>
        </S.Card>
      ))}
    </S.Cards>

    <S.Intro>
      <S.IntroVideo>
        <S.Player>
          <Play size="40" title="Play" />
        </S.Player>
      </S.IntroVideo>
      <S.IntroText>
        <S.IntroTextTitle>{t("home.introTitle")}</S.IntroTextTitle>
        <p>{t("home.introText")}</p>
        <S.AssignLink>
          {t("home.introLink")} <ArrowRight size="20" title="assinar" />
        </S.AssignLink>
      </S.IntroText>
    </S.Intro>
    <Courses />
  </Layout>
)

IndexPage.propTypes = {
  t: PropTypes.func.isRequired,
  infoCards: PropTypes.array.isRequired,
}

export default translate(IndexPage)
