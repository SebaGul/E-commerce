import React from 'react'
import styled from 'styled-components'
import {categories} from "../data"
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: #161a24;
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item= {item} key= {item.id} />
            ))}
        </Container>
    )
}

export default Categories
