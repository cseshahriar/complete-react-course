import React from 'react';
import axios from 'axios';

import {useMutation, useQuery, useQueryClient} from 'react-query'
import { Button, Container, Flex, Grid, Heading, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PostCreat from "./PostCreat";
import {fetchPosts, deletePost, fetchPost} from "../api";

const Home = () => {
    const cache = useQueryClient();

    const navigate = useNavigate();
    const {id} = useParams();
    const pageId = parseInt(id) || parseInt(1);

    const toast = useToast();

    const { isLoading, error, data, isSuccess } = useQuery(
        ['posts', pageId],
        () => fetchPosts(pageId),
        {
            keepPreviousData: true
        }
    );

    // dependent query
    const {data: singlePost} = useQuery(
        ['post', 18335],
        () => fetchPost(18335),
        {
            enabled: isSuccess // dependent query
        }
    )
    console.log('post', singlePost);
    console.log('posts', data);


    const { isLoading: isMutating, mutateAsync } = useMutation(
        'deletePost',
        deletePost,
        {
            onError: (error) => {
                toast({status: 'error', title: error.message});
            },
            onSuccess: () => {
                cache.invalidateQueries('posts');
            }

        }
    );

    // if (isLoading) return  <Grid placeItems="center" height="100vh"><Spinner/></Grid>;
    if (error) return toast({status: "error", title: error.message});

    return (
        <Container maxW="1300px" mt="4">
            <>
                {
                    isLoading ?
                        <Grid placeItems="center" height="100vh"><Spinner/></Grid>
                        : error
                            ?  <Grid placeItems="center" height="100vh">{error}</Grid>
                            : (
                            <>
                                <PostCreat />
                                <Flex justify="space-between" mb="4">
                                    <Button
                                        colorScheme="green"
                                        onClick = {() => {
                                            if(data.meta.pagination.links.previous !== null) {
                                                navigate(`/${pageId - 1}`)
                                            }
                                        }}
                                        disabled={!data.meta.pagination.links.previous !== null}
                                    > Prev</Button>
                                    <Text>Current Page { pageId }</Text>
                                    <Button
                                        colorScheme="green"
                                        onClick = {() => {
                                            navigate(`/${pageId + 1}`)
                                        }}
                                    > Next</Button>

                                </Flex>
                                {
                                   data.data && data.data.map((post) => (

                                            <Stack key={post.id} mb="4" mt="2" p="4" boxShadow="md" borderRadius="x1" border="1px solid #ccc">

                                                <Flex justify="space-between">
                                                    <Text>User Id: { post.user_id }</Text>
                                                    <Text>Post Id: { post.id } </Text>

                                                    <Flex>
                                                        <Button
                                                            size="sm"
                                                            isLoading={isMutating}
                                                            onClick={async () => {
                                                                await mutateAsync({id: post.id})
                                                            }}
                                                        >Delete</Button>
                                                    </Flex>
                                                </Flex>

                                                <Heading>
                                                    <Link to={`/post/${post.id}`} key={post.id}>{ post.title }</Link>
                                                </Heading>
                                                <Text>{ post.body }</Text>
                                            </Stack>
                                    ))
                                }
                            </>
                        )
                }
            </>
        </Container>
    );
};

export default Home;