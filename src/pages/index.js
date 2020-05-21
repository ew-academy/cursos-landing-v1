import React from "react"

// @imports
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import * as S from "../styles/home"
import { infoCards } from "../mocks/info-cards"

// icons
import { Play } from "@styled-icons/boxicons-regular"
import { ArrowRight } from "@styled-icons/feather"
import Courses from "../components/Courses"

const IndexPage = () => (
  <Layout>
    <SEO title="Erick Wendel | Treinamentos" />
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
        <S.IntroTextTitle>
          Mais de 40.000 pessoas foram treinadas por Erick Wendel
        </S.IntroTextTitle>
        <p>
          Sou conhecido por ser uma pessoa humilde, que veio de um lugar bem pobre em São Paulo e alcancei lugares como Ucrânia, Alemanha, Estados Unidos e mais. Sempre tive a filosofia de compartilhar conhecimento e com isso, fundei a comunidade de software mais popular da América latina e ganhei dois prêmios (que funcionam como um Grammy em Software) o Google Developer Expert (onde existem somente 100 brasileiros, 2000 no mundo) e Microsoft Most Valuable Professional (existem +-200 brasileiros e 4K+ mundo).

          Lancei um treinamento gratuito completo, para iniciantes, como forma de desafiar os iniciantes que me rendeu uma popularidade gigantesca por apresentar um conteúdo que até então nenhum outro instrutor havia apresentado no Brasil. Hoje vivo como consultor em performance e arquitetura de aplicações focadas em Node.js e plataformas em nuvem, além da criação dos treinamentos online.
        </p>
        <S.AssignLink>
          Cursos <ArrowRight size="20" title="assinar" />
        </S.AssignLink>
      </S.IntroText>
    </S.Intro>
    <Courses />
  </Layout>
)

IndexPage.propTypes = {
  infoCards: PropTypes.array.isRequired,
}

export default IndexPage
