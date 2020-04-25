import React from "react"

// components
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import * as S from "../styles/home"

// icons
import startup from "../images/icons/startup.svg"
import terminal from "../images/icons/code-terminal.svg"
import brain from "../images/icons/brain.svg"
import { Play } from "@styled-icons/boxicons-regular"
import { ArrowRight } from "@styled-icons/feather"
import Courses from "../components/Courses"

// mocks
const cards = [
  {
    icon: startup,
    title: "Aprenda na prática",
    description: "Aprenda tão rápido como um foguete!",
  },
  {
    icon: terminal,
    title: "Code Review",
    description: "Cursos com direito a code review",
  },
  {
    icon: brain,
    title: "Divirta-se",
    description: "Aprenda com muita diversão !",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="slider">
        <Slider />
      </div>

      <S.Cards>
        {cards.map((card, i) => (
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
            Mais de 20.000 pessoas em apenas 4 cursos
          </S.IntroTextTitle>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec
            leo commodo, ut interdum diam laoreet. Sed non consequat odio.
            Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie
            leo, vitae iaculis nisl. Si num tem leite então bota uma pinga aí
            cumpadi! Suco de cevadiss, é um leite divinis, qui tem lupuliz,
            matis, aguis e fermentis.
          </p>
          <S.AssignLink>
            Cursos <ArrowRight size="20" title="assinar" />
          </S.AssignLink>
        </S.IntroText>
      </S.Intro>
      <Courses />
  </Layout>
)

export default IndexPage
