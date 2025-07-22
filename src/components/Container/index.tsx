import React from 'react'
import styled from 'styled-components'

const ContainerWidth = styled.div`
    width: 80%;
    max-width: 1400px;
    margin: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 16px;
    }
`

const Container = ({ children }) => {
    return <ContainerWidth>{children}</ContainerWidth>
}

export default Container
