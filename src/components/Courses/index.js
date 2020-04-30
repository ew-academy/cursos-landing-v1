import React from "react"

// @imports
import PropTypes from "prop-types"

// components
import * as S from "./styled"
import { courses } from "../../templates/courses"

const Courses = () => (
  <S.Courses>
    <S.TitleSection>
      <span role="img" aria-label="Foguete">🚀</span> Cursos
    </S.TitleSection>
    <S.Cards>
      {courses.map((course, i) => (
        <S.Card key={i}>
          <a href={course.url}>
            <S.Thumbnail src={course.thumbnail}></S.Thumbnail>
            <S.Content>
              <S.Title>{course.title}</S.Title>
              <S.Description>{course.description}</S.Description>
              <S.Author>
                <S.AuthorImage src={course.authorImage}></S.AuthorImage>
                <S.AuthorName>{course.authorName}</S.AuthorName>
              </S.Author>
            </S.Content>
            <S.Infos>
              <S.Level>{course.level}</S.Level>
              <S.Price>
                {course && course.discount !== "" ? (
                  <>
                    <S.RealPrice>R${course.price}</S.RealPrice>
                    <S.Discount>R${course.discount}</S.Discount>
                  </>
                ) : (
                  <S.Discount>R${course.price}</S.Discount>
                )}
              </S.Price>
            </S.Infos>
          </a>
        </S.Card>
      ))}
    </S.Cards>
  </S.Courses>
)

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
}

export default Courses
