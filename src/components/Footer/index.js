import React from "react"

// components
import * as S from "./styled"
import links from "../links"
import brand from "../../images/white-brand.png"

// icons
import { Gatsby, Reactjs } from "@styled-icons/remix-line"
import barcode from "../../images/icons/barcode.svg"
import creditCard from "../../images/icons/credit-card.svg"
import googlePay from "../../images/icons/google-pay.svg"
import hotmart from "../../images/icons/hotmart.svg"
import paypal from "../../images/icons/paypal.svg"
import samsungPay from "../../images/icons/samsung-pay.svg"

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
        <S.ColTextIcons>
          <img src={barcode} alt="Código de barras" />
          <img src={creditCard} alt="Cartão de Crédito" />
          <img src={googlePay} alt="Google Pay" />
          <img src={hotmart} alt="Hotmart" />
          <img src={paypal} alt="Paypal" />
          <img src={samsungPay} alt="Samsung Pay" />
        </S.ColTextIcons>
      </S.Col>
    </S.Cols>
    <S.Copy>
      EW.IT &copy; 2020 - All rights reserved. Develop with{" "}
      <Gatsby size={14} title="Gatsby" /><Reactjs size={14} title="React" /> by{" "}
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
