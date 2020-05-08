import React from "react"
import styled from "styled-components"
import Header from "./header"
import { Helmet } from "react-helmet"

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => (
  <Page>
    <Helmet>
      <title>Matt's website</title>
    </Helmet>
    <Header />
    <ContentContainer>{props.children}</ContentContainer>
  </Page>
)

export default Layout

const Page = styled.div`
  height: 100%;
  margin-top: 0px;
`

const ContentContainer = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`
