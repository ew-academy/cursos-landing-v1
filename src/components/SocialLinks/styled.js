import styled from "styled-components"

export const Links = styled.ul`
  display: flex;
  list-style: none;
`
export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #06BF37;
  }
`
export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin: 1rem 1rem 0 0;
`
