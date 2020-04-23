import React from "react"

import * as S from "./styled"
import { courses } from "./mock"

const Courses = ({}) => (
  <S.Courses>
    <S.Cards>
      {courses.map((course, i) => (
        <S.Card key={i}>
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
        </S.Card>
      ))}
    </S.Cards>
  </S.Courses>
)

export default Courses
