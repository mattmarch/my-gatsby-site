import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

type Props = {
  data: Data
}

type Data = {
  markdownRemark: {
    html: string
    frontmatter: Frontmatter
  }
}

type Frontmatter = {
  title: string
  date: string
}

const Post = ({ data }: Props) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <Heading frontmatter={data.markdownRemark.frontmatter} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default Post

type HeadingProps = {
  frontmatter: Frontmatter
}

const Heading = ({ frontmatter }: HeadingProps) => (
<div>
  <Title>{frontmatter.title}</Title>
  <PublishedDate>Published {new Date(frontmatter.date).toLocaleDateString()}</PublishedDate>
</div>
)

const Title = styled.h1`
  margin-bottom: 0.5rem;
`

const PublishedDate = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
