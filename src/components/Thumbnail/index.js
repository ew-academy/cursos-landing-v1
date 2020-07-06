import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper } from "./styled"

const Thumbnail = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { absolutePath: { regex: "/static/assets/img/" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 580, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(props.filename)
      )

      if (!image) {
        return null
      }

      return <Wrapper alt={props.alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

export default Thumbnail
