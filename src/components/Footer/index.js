import React from "react"

import * as S from "./styled"
import links from "../../utils/links"
import brand from "../../images/white-brand.png"
import { Gatsby } from "@styled-icons/remix-line"
import { Reactjs } from "@styled-icons/remix-line"

const Footer = () => (
  <S.Footer>
    <S.Cols>
      <S.Col>
        <img
          src={brand}
          alt="Erick Training"
          style={{ width: "100px", marginBottom: "1em" }}
        />
        <S.ColText>Cursos e treinamentos</S.ColText>
        <S.ColText>
          Erick Wendel Gomes da Silva ME <br />
          CNPJ: 34.267.390/0001-82
        </S.ColText>
      </S.Col>

      <S.Col>
        <S.ColTitle>Entre em contato</S.ColTitle>
        <S.ColText>
          E-mail: comercial@erickwendel.com.br <br />
        </S.ColText>
      </S.Col>

      <S.Col>
        <S.ColTitle>Navegação</S.ColTitle>
        {links.map((link, i) => (
          <S.Link href={link.url} key={i}>
            {link.label}
          </S.Link>
        ))}
      </S.Col>
      <S.Col>
        <S.ColTitle>Formas de pagamento</S.ColTitle>
        <S.ColText>
          Boleto <br />
          Cartão de crédito <br />
          Conta Hotmart <br />
          Paypal <br />
          Samsung Pay <br />
          Google Pay <br />
        </S.ColText>
      </S.Col>
    </S.Cols>
    <S.Copy>
      EW.IT &copy; 2020 - All rights reserved. Develop with{" "}
      <Gatsby size={14} title="Gatsby" />{" "}
      <Reactjs size={14} title="React" /> by{" "}
      <a
        href="https://luislanca.com.br"
        style={{ color: "#fff", fontWeight: 700 }}
      >
        Luís Lança
      </a>
    </S.Copy>
  </S.Footer>
)

export default Footer
