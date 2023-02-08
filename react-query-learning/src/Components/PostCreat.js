import React from 'react';
import { Form, Formik } from "formik";
import {InputControl, SubmitButton, TextareaControl} from "formik-chakra-ui";
import {Container, Heading, Stack, useToast} from "@chakra-ui/react";
import { useMutation } from "react-query";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const addNewPost = async ({ title, body }) => {
    try {
        const { data } = await axios.post(
            `https://gorest.co.in/public/v2/users/319739/posts`,
            {
                title,
                body,
            }, {
                headers: {
                    Authorization: "Bearer f7b3aeeaf96b603009a3a1826ea6c938235d36ab6232fbe2c953d85064678db2"
                }
            }
        );
        return data;
    } catch (error) {
        throw Error(error.message);
    }
}

const PostCreat = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const { isLoading, data, mutateAsync, isSuccess } = useMutation(
        'addNewPost',
        addNewPost,
        {
            onError: (error) => {
                toast({ status: "error", title: error.message })
            }
        }
    );

    console.log(data);
    if(isSuccess) {
        toast({ status: "success", title: 'Post created' });
        navigate('/');
    }

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