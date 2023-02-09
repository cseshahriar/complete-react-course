import React from 'react';
import { Form, Formik } from "formik";
import { InputControl, SubmitButton, TextareaControl} from "formik-chakra-ui";
import { Container, Heading, Stack, useToast} from "@chakra-ui/react";
import { useMutation, useQueryClient} from "react-query";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { addNewPost } from "../api";

const PostCreat = () => {
    const cache = useQueryClient();
    const navigate = useNavigate();
    const toast = useToast();

    const { isLoading, data, mutateAsync, isSuccess } = useMutation(
        'addNewPost',
        addNewPost,
        {
            onSuccess: () => {
                cache.invalidateQueries('posts'); // cache clear
                navigate('/');
                toast({ status: "success", title: 'Post created' });
            },
            onError: (error) => {
                toast({ status: "error", title: error.message })
            }
        }
    );
    
    return (
        <Container maxW="1300px" mt="4">
            <Formik
                initialValues={{title: '', body: ''}}
                onSubmit={ async (values) => {
                    await mutateAsync({
                            title: values.title,
                            body: values.body
                        }
                    )
                }}
            >
                <Form>
                    <Stack my="4">
                        <Heading fontSize="2xl" textAlign="center">Add new post</Heading>
                        <InputControl name="title" label="Title" mb="1" />
                        <TextareaControl name="body" label="Body" mb="2" />
                        <SubmitButton>Save</SubmitButton>
                    </Stack>
                </Form>
            </Formik>
        </Container>
    );
};

export default PostCreat;