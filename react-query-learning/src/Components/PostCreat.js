import React from 'react';
import { Form, Formik } from "formik";
import {InputControl, SubmitButton, TextareaControl} from "formik-chakra-ui";
import {Heading, Stack, useToast} from "@chakra-ui/react";
import { useMutation } from "react-query";
import axios from "axios";

const addNewPost = async ({ title, body }) => {
    try {
        const { data } = await axios.post(
            `https://gorest.co.in/public/v1/users/675/posts`,
            {
                title,
                body,
                user: 675
            }, {
                headers: {
                    Authorization: "Bearer 7ec656aef69513df85dbf4ad4b4fa1eed923c8d83421266bf18383b3b9433362"
                }
            }
        );
        return data;
    } catch (error) {
        throw Error(error.response.statusText);
    }
}

const PostCreat = () => {
    const toast = useToast();

    const { isLoading, data, mutateAsync } = useMutation(
        'addNewPost',
        addNewPost,
        {
            onError: (error) => {
                toast({ status: "error", title: error.message })
            }
        }
    );

    return (
        <div>
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
        </div>
    );
};

export default PostCreat;