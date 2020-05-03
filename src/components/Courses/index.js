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
        allMarkdownRemark {
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
        {courses.map(
          ({
            node: {
              frontmatter: {
                url,
                thumbnail,
                title,
                description,
                authorImage,
                authorName,
                level,
                price,
                discount,
              },
            },
          }, i) => (
            <S.Card key={i}>
              <a href={url}>
                <S.Thumbnail src={thumbnail}></S.Thumbnail>
                <S.Content>
                  <S.Title>{title}</S.Title>
                  <S.Description>{description}</S.Description>
                  <S.Author>
                    <S.AuthorImage src={authorImage}></S.AuthorImage>
                    <S.AuthorName>{authorName}</S.AuthorName>
                  </S.Author>
                </S.Content>
                <S.Infos>
                  <S.Level>{level}</S.Level>
                  <S.Price>
                    {courses && discount !== "" ? (
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
        )}
      </S.Cards>
    </S.Courses>
  )
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
}

export default Courses
