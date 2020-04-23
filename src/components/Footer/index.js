import React from "react"

import * as S from "./styled"
import links from "../../utils/links"

const Footer = () => (
  <S.Footer>
    <S.Cols>
      <S.Col>
        <S.ColText>Cursos e treinamentos</S.ColText>
        <S.ColText>
          EW.IT Erick Wendel - LTDA <br />
          CNPJ: 00.000.000/0001-00
        </S.ColText>
      </S.Col>

      <S.Col>
        <S.ColTitle>Entre em contato</S.ColTitle>
        <S.ColText>
          E-mail: contato@ew.it <br />
          WhatsApp: +55 (11) 92903-9472
        </S.ColText>
        <S.ColText>
          Termos de uso <br />
          Política de privacidade
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
      EW.IT &copy; 2020 - All rights reserved. Develop by Luís Lança
    </S.Copy>
  </S.Footer>
)

export default Footer
