import styled from "styled-components"
import media from "styled-media-query"

export const Main = styled.main`
  ${media.greaterThan('huge')`
    width: 50%
  `}
  ${media.between("large", "huge")`
   width: 90%
  `}
  ${media.lessThan("large")`
    width: 90%
  `}
  margin: auto;
`
