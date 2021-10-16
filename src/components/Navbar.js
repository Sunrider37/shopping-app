import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({
        height: '50px'
    })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: '10px 0'
    })}
`

const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
    ${mobile({
        display: 'none'
    })}
`

const Input = styled.input`
    border: none;
    ${mobile({
        width: '50px'
    })}
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: '20px'
    })}
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25;
    padding: 5px;
    border: 0.5px solid lightgray;
`

const Center = styled.div`
    text-align: center;
    flex: 1;
`
const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
        justifyContent: 'center'
    })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
        fontSize: '12px', marginLeft: '12px'
    })}
`

const Navbar = () => {
    return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <Search style={{color: 'gray', fontSize: '16px'}} />
                </SearchContainer>
            </Left>
            <Center><Logo>SUNRIDER.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem >
                <Badge
                badgeContent={4} 
                color="primary"
                >
                    <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
    )
}

export default Navbar
