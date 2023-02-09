import React from 'react';
import axios from 'axios';

import { useQuery } from 'react-query'
import { Button, Container, Flex, Grid, Heading, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PostCreat from "./PostCreat";

const fetchPosts = async (id) => {
    try {
        const { data } = await axios.get(
            `https://gorest.co.in/public/v1/posts?page=${id}`
        );
        return data;
    } catch(error) {
        throw Error("Unable to fetch Posts");
    }
}

const Home = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const pageId = parseInt(id) || parseInt(1);

    const toast = useToast();
    const { isLoading, error, data } = useQuery(
        ['posts', pageId],
        () => fetchPosts(pageId),
        {
            keepPreviousData: true
        }
    )
    console.log('data', data);
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
                                        <Link to={`/post/${post.id}`} key={post.id}>
                                            <Stack mb="4" mt="2" p="4" boxShadow="md" borderRadius="x1" border="1px solid #ccc">
                                                <Flex justify="space-between">
                                                    <Text>User Id: { post.user_id }</Text>
                                                    <Text>Post Id: { post.id } </Text>
                                                </Flex>
                                                <Heading>{ post.title }</Heading>
                                                <Text>{ post.body }</Text>
                                            </Stack>
                                        </Link>

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