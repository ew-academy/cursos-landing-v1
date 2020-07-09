import React from "react"

// @imports
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import * as S from "../styles/home"
import Courses from "../components/Courses"
import { translate } from "../i18n/translate"

// icons
import { Play } from "@styled-icons/boxicons-regular"
// import { ArrowRight } from "@styled-icons/feather"
import startup from "../images/icons/startup.svg"
import terminal from "../images/icons/code-terminal.svg"
import brain from "../images/icons/brain.svg"

const IndexPage = ({ t }) => (
  <Layout>
    <SEO title={t("home.titlePage")} />
    <div className="slider">
      <Slider />
    </div>

    <S.Cards>
      <S.Card>
        <S.Icon src={startup} />
        <S.CardTitle>{t("infoCard.cardOneTitle")}</S.CardTitle>
        <S.CardDescription>{t("infoCard.cardOneDescription")}</S.CardDescription>
      </S.Card>
      <S.Card>
        <S.Icon src={terminal} />
        <S.CardTitle>{t("infoCard.cardTwoTitle")}</S.CardTitle>
        <S.CardDescription>{t("infoCard.cardTwoDescription")}</S.CardDescription>
      </S.Card>
      <S.Card>
        <S.Icon src={brain} />
        <S.CardTitle>{t("infoCard.cardThreeTitle")}</S.CardTitle>
        <S.CardDescription>{t("infoCard.cardThreeDescription")}</S.CardDescription>
      </S.Card>
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
        {/* <S.AssignLink>
          {t("home.introLink")} <ArrowRight size="20" title="assinar" />
        </S.AssignLink> */}
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
