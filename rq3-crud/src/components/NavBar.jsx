import React from 'react';
import { Flex, Box, Link as StyledLink, Image } from "rebass/styled-components";
import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "./logo.svg";

const NavBar = () => {
    return (
        <Flex bg="black" color="white" justifyContent="center" padding={4}>
            <Container>
                <Flex px={2} width="100%" alignItems="center">
                    <Image size={20} src={logo} />

                    <Link component={StyledLink} variant="nav" to="/">
                        Book List
                    </Link>

                    <Box mx="auto">
                        <Link to="/create-book" variant="nav" component={StyledLink}>
                            + Add ne book
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    );
};

export default NavBar;