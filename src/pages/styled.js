import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 80%;
  margin: auto;
`
export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3em 0;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 2em;
  border-radius: 3px;
  box-shadow: 0 0 1em #ccc;
`
export const Icon = styled.img`
  width: 40px;
`
export const CardTitle = styled.p`
  color: #00d138;
  margin: 0.5em 0;
  font-weight: 500;
  font-size: 1.1rem;
`
export const CardDescription = styled.p`
  font-weight: 300;
  text-align: center;
  line-height: 1.3;
`
export const Intro = styled.section`
  display: flex;
  margin-bottom: 3em;
`
export const IntroVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00d138;
  margin-right: 2.5em;
  width: 35%;
  height: 400px;
`
export const Player = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  box-shadow: 0 0 1em #272727;
  &:hover {
    cursor: pointer;
  }
`
export const IntroText = styled.div`
  width: 65%;

  p {
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 1em;
  }
`
export const IntroTextTitle = styled.h3`
  font-size: 2.3rem;
  margin: 0.3em 0 0.8em 0;
  line-height: 1.2;
  font-weight: 500;
`
export const AssignLink = styled(Link)`
  margin-top: 2em;
  color: #00d138;
  font-weight: 500;
`
