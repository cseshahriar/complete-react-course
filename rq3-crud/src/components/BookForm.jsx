import React from 'react';
import { Box, Button } from "rebass/styled-components";
import { Label, Input } from "@rebass/forms";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";

const BookForm = ({defaultValues, onFormSubmit, isLoading}) => {
    const { register, handleSubmit, watch, errors } = useForm({defaultValues});
    const onSubmit = handleSubmit((data) => {
        onFormSubmit(data);
    })

    return (
        <form onSubmit={onSubmit}>
            <Box sx={{marginBottom: 3}}>
                <Label htmlFor="title">Title</Label>
                <Input
                    {...register('title', { required: true })}
                    id="title"
                    name="title"
                    type="text"
                />
            </Box>

            <Box sx={{marginBottom: 3}}>
                <Label htmlFor="author">Author</Label>
                <Input
                    {...register('author', { required: true })}
                    id="author"
                    name="author"
                    type="text"
                />
            </Box>
            <Button>
                { isLoading ? <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : 'Submit'}
            </Button>
        </form>
    );
};

export default BookForm;