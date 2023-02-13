import React from 'react';
import { useQuery } from "react-query";
import {getAllBooks} from "../api";
import Container from "./Container";
import { Flex } from "rebass/styled-components";
import { ThreeDots } from "react-loader-spinner";

const BooksList = () => {
    const { data, error, isLoading, isError } = useQuery(
        "books", getAllBooks
    );
    console.log('data', data);

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
            <Flex py="5" justifyContent="center" flexDirection="column" alignItems="center">
                {
                    data.map(({author, title, id}) => (
                        <div key={id}>
                            {author} - {title}
                        </div>
                    ))
                }
            </Flex>
        </Container>
    );
};

export default BooksList;