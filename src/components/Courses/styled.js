import styled from "styled-components"
import media from "styled-media-query"

export const Courses = styled.section`
  margin-bottom: 3em;
  ${media.lessThan("medium")`
    margin-bottom: 1em;
  `}
`
export const TitleSection = styled.p`
  margin: 3em 0 1em 0;
  font-size: 1.5rem;
  ${media.lessThan("medium")`
    margin-top: 1em;
  `}
`
export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`
export const Content = styled.div`
  padding: 0 1em 0em 1em;
  display: flex;
  flex-direction: column;
`
export const Card = styled.div`
  border-radius: 1px;
  box-shadow: 0 0 0.3em #ccc;
  width: 31%;
  margin-bottom: 2em;
  ${media.lessThan("medium")`
   width: 100%;
  `}
`
export const Thumbnail = styled.img`
  background-size: cover;
  width: 100%;
`
export const Title = styled.p`
  margin: 0.8em 0;
  line-height: 1.2;
`
export const Description = styled.p`
  font-weight: 300;
  line-height: 1.2;
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
  align-items: baseline;
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
export const CustomMessage = styled.p`
  background: #00d138;
  padding: 0.3rem 0.5rem;
  color: #fff;
  margin-top: 0.3rem;
  display: inline-block;
`
