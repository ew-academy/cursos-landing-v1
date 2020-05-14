import React from "react"

// @imports
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// components
import * as S from "./styled"

const Courses = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query getCourses {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___release }
        ) {
          edges {
            node {
              frontmatter {
                url
                author
                authorImage
                description
                discount
                level
                price
                thumbnail
                title
                release
                message
              }
            }
          }
        }
      }
    `
  )

  const courses = allMarkdownRemark.edges

  return (
    <S.Courses>
      <S.TitleSection>
        <span role="img" aria-label="Foguete">
          🚀
        </span>{" "}
        Cursos
      </S.TitleSection>
      <S.Cards>
        {courses ? (
          courses.map(
            (
              {
                node: {
                  frontmatter: {
                    url,
                    thumbnail,
                    title,
                    description,
                    authorImage,
                    author,
                    level,
                    price,
                    discount,
                    message,
                  },
                },
              },
              i
            ) => (
              <S.Card key={i}>
                <a href={url}>
                  <S.Thumbnail src={thumbnail}></S.Thumbnail>
                  {courses && message && <S.CustomMessage>{message}</S.CustomMessage>}
                  <S.Content>
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                    <S.Author>
                      <S.AuthorImage src={authorImage}></S.AuthorImage>
                      <S.AuthorName>{author}</S.AuthorName>
                    </S.Author>
                  </S.Content>
                  <S.Infos>
                    <S.Level>{level}</S.Level>
                    <S.Price>
                      {courses && price === "" && discount === "" ? (
                        <S.Discount>GRÁTIS</S.Discount>
                      ) : courses && discount !== "" ? (
                        <>
                          <S.RealPrice>R${price}</S.RealPrice>
                          <S.Discount>R${discount}</S.Discount>
                        </>
                      ) : (
                        <S.Discount>R${price}</S.Discount>
                      )}
                    </S.Price>
                  </S.Infos>
                </a>
              </S.Card>
            )
          )
        ) : (
          <p>Em breve lançaremos novos cursos!</p>
        )}
      </S.Cards>
    </S.Courses>
  )
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
}

export default Courses
