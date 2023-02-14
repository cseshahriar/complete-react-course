import React from 'react';
import {Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient} from "react-query";
import {removeBook} from "../api";

import { ThreeDots } from "react-loader-spinner";

const BookItem = ({author, title, id}) => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(removeBook); // changable
    const remove = async () => {
        await mutateAsync(id)
        queryClient.invalidateQueries("books") // cache remove
    }

    return (
        <Flex p={3} width="100%" alignItems="center">
            <Link component={StyledLink} to={`/update-book/${id}`} mr="auto">
                {title}
            </Link>
            <Text ml="5">{author}</Text>
            <Button ml="5" onClick={remove}>
                { isLoading ? <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : 'Remove'}
            </Button>
        </Flex>
    );
};

export default BookItem;