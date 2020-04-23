import styled from "styled-components"

export const Courses = styled.section`
  margin-bottom: 3em;
`
export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const Content = styled.div`
  padding: 0 1em 0em 1em;
  display: flex;
  flex-direction: column;
  justify-content: end;
`
export const Card = styled.div`
  border-radius: 1px;
  box-shadow: 0 0 0.3em #ccc;
  max-width: 30%;
  margin-bottom: 2em;
`
export const Thumbnail = styled.img`
  background-size: cover;
  width: 100%;
`
export const Title = styled.p`
  margin: 0.8em 0;
`
export const Description = styled.p`
  font-weight: 300;
`
export const Author = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
`
export const AuthorImage = styled.img`
  width: 40px;
  border-radius: 50%;
`
export const AuthorName = styled.p`
  margin-left: 1em;
  font-weight: 300;
`
export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: #ddd solid 1px;
  padding: 0.7em 1em;
`
export const Level = styled.p`
  font-weight: 300;
`
export const Price = styled.div`
  display: flex;
  align-items: center;
`
export const Discount = styled.p`
  font-size: 1.2rem;
  color: #00d138;
`
export const RealPrice = styled.p`
  color: #c3c3c3;
  text-decoration: line-through;
  margin-right: 0.5em;
  font-size: 0.9rem;
`
