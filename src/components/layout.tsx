import React from "react"
import styled from "styled-components"
import Header from "./header"
import { Helmet } from "react-helmet"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <Page>
    <Helmet>
      <title>Matt's website</title>
    </Helmet>
    <Header />
    <ContentContainer>{children}</ContentContainer>
    <Footer>
        <hr/>
        © 2020 Matt March
    </Footer>
  </Page>
)

export default Layout

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 0px;
`

const ContentContainer = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
  flex-grow: 1;
`

const Footer = styled.div`
  font-size: 0.8rem;
  padding: 1rem;
  text-align: center;
`
