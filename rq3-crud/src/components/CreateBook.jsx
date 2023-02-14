import React from 'react';
import BookForm from "./BookForm";
import Container from "./Container";
import { useMutation } from "react-query";
import { createBook } from "../api";
import { Box, Heading } from "rebass/styled-components";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
    const navigate = useNavigate();
    const { mutateAsync, isLoading } = useMutation(createBook);

    const onFormSubmit = async (data) => {
        await mutateAsync(data);
        navigate('/');
    }

    return (
        <Container>
            <Box sx={{py: 3}}>
                <Heading sx={{marginBottom: 3}}>Create New Book</Heading>
                <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
            </Box>
        </Container>
    );
};

export default CreateBook;