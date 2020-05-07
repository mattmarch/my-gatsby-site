import React from "react"
import styled from "styled-components"
import Header from "./header"

export default ({ children }) => (
    <Page>
      <Header/>
      <ContentContainer>{children}</ContentContainer>
    </Page>

)

const Page = styled.div`
  height: 100%;
  margin-top: 0px;
`

const ContentContainer = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`
