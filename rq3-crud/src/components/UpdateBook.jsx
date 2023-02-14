import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getBook, updateBook } from "../api";
import Container from "./Container";
import { Box, Flex, Heading } from "rebass/styled-components";
import { ThreeDots } from "react-loader-spinner";

import BookForm from "./BookForm";

const UpdateBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery(['book', {id}], getBook);
    console.log('fetch data', data);

    const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

    const onFormSubmit = async (data) => {
        await mutateAsync({...data, id});
        navigate('/');
    }

    if(isLoading) {
        return <Container>
            <Flex py="5" justifyContent="center">
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </Flex>
        </Container>
    }

    if(isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <Container>
            <Box sx={{py: 3}}>
                <Heading sx={{marginBottom: 3}}>Update  Book</Heading>
                <BookForm
                    defaultValues={data}
                    onFormSubmit={onFormSubmit}
                    isLoading={isMutating}
                />
            </Box>
        </Container>
    );
};

export default UpdateBook;