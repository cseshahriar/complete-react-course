import React from 'react';
import { Form, Formik } from "formik";
import { InputControl, SubmitButton, TextareaControl} from "formik-chakra-ui";
import { Container, Heading, Stack, useToast} from "@chakra-ui/react";
import { useMutation, useQueryClient} from "react-query";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import {addNewPost, updatePost} from "../api";

const PostCreat = ({isUpdate, id}) => {
    const cache = useQueryClient();
    const navigate = useNavigate();
    const toast = useToast();

    const { isLoading, data, mutateAsync, isSuccess } = useMutation(
        isUpdate ? "updatePost" : "addNewPost",
        isUpdate ? updatePost : addNewPost,
        {
            onSuccess: () => {
                isUpdate
                    ? cache.invalidateQueries(['post', parseInt(id)])
                    : cache.invalidateQueries('posts');

                // cache clear
                navigate('/');

                toast({ status: "success", title: 'Post created' });
            },
            onMutate: async (addNewPost) => {
                if(isUpdate) {
                    // cancel any outgoing refetches
                    await cache.cancelQueries("post");

                    // shanpshot the previous value
                    const previousPost = cache.getQueriesData(["post", id]);
                    console.log(addNewPost);

                    // optimistically update to the new value
                    cache.setQueriesData(["post", id], (old) => {
                        console.log(old);
                        return {data: addNewPost};
                    })
                    // return a context object with the snapshotted value
                    return { previousPost };
                }
            },
            onError: (error) => {
                toast({ status: "error", title: error.message })
            },
            onSettled: () => {
                // cache.invalidateQueries(["post", id.toString()])
            }
        }
    );
    
    return (
        <Container maxW="1300px" mt="4">
            <Formik
                initialValues={{title: '', body: ''}}
                onSubmit={ async (values) => {
                isUpdate
                    ?  await mutateAsync({title: values.title, body: values.body, id})
                    : await mutateAsync({title: values.title, body: values.body})
                }}
            >
                <Form>
                    <Stack my="4">
                        <Heading fontSize="2xl" textAlign="center">
                            { isUpdate ? "Update" : "Add"}
                        </Heading>
                        <InputControl name="title" label="Title" mb="1" />
                        <TextareaControl name="body" label="Body" mb="2" />
                        <SubmitButton>{isUpdate ? 'Save': 'Add New'} Post</SubmitButton>
                    </Stack>
                </Form>
            </Formik>
        </Container>
    );
};

export default PostCreat;