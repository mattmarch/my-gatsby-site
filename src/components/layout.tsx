import React from "react"
import styled from "styled-components"

export default ({ children }) => (
    <ContentContainer>
        {children}
    </ContentContainer>
)

const ContentContainer = styled.div`
    color: hotpink;
    margin: 3rem auto;
    max-width: 650px;
    padding: 0 1rem;
`