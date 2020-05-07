import React from "react"
import styled from "styled-components"

export default () => (
  <Container>
    <Title>Matt's Website</Title>
  </Container>
)

const Container = styled.div`
  background-image: url(bridge.jpg);
  background-size: cover;
  background-position-y: 26%;
  padding: 10px;
  width: 100%;
`

const Title = styled.h1`
  color: white;
  padding: 2rem 20% 4rem 20%;
`
