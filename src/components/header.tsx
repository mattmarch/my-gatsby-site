import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bridge.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <header>
      <StyledBackgroundImage fluid={imageData}>
        <Link to="/">
          <Title>Matt's Website</Title>
        </Link>
      </StyledBackgroundImage>
    </header>
  )
}

export default Header

const StyledBackgroundImage = styled(BackgroundImage)`
  background-position-y: 26%;
  padding: 10px;
`

const Title = styled.h1`
  color: white;
  padding: 2rem 20% 4rem 20%;
  text-shadow: none;
`
