import React from 'react';
import {Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
import { Link } from "react-router-dom";
const BookItem = ({author, title, id}) => {
    return (
        <Flex p={3} width="100%" alignItems="center">
            <Link component={StyledLink} to={`/update-book/${id}`} mr="auto">
                {title}
            </Link>
            <Text ml="5">{author}</Text>
            <Button ml="5">Remove</Button>
        </Flex>
    );
};

export default BookItem;