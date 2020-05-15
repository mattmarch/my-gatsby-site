import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Index = () => (
  <Layout>
    <h1>Hi, I'm Matt March, and welcome to my website</h1>
    <p>
      I've just recreated my website using Gatsby and Typescript, check out my <Link to="/new-website">short write up of why and how here</Link>.
    </p>
    <p>
      Hopefully I'll have more content coming soon!
    </p>
  </Layout>
)

export default Index
