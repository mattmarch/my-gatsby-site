import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Index = () => (
  <Layout>
    <h1>Hi, I'm Matt March, and welcome to my website</h1>
    <p>
      I'm a Bristol based software engineer currently working at <a href="https://www.ghyston.com/">Ghyston</a>. You can find me on:
    </p>
    <ul>
      <li><a href="https://github.com/mattmarch">Github</a></li>
      <li><a href="https://www.linkedin.com/in/matthew-march-a75b21121/">LinkedIn</a></li>
      <li><a href="mailto:me@mattmarch.co.uk">Email</a></li>
    </ul>
    <p>
      I've just recreated my website using Gatsby and Typescript, check out my <Link to="/new-website">short write up of why and how here</Link>.
    </p>
    <p>
      Hopefully I'll have more content coming soon!
    </p>
  </Layout>
)

export default Index
