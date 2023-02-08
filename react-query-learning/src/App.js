import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
// 1. import `ChakraProvider` component
import { ChakraProvider, Heading } from '@chakra-ui/react'

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
// npm i react-query
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion formik formik-chakra-ui
// npm i axios react-router-dom
// https://gorest.co.in/
// access token 7ec656aef69513df85dbf4ad4b4fa1eed923c8d83421266bf18383b3b9433362
import { ReactQueryDevtools } from 'react-query/devtools'

import Home from "./Components/Home";
import Post from "./Components/Post";
import PostCreat from "./Components/PostCreat";

const App = () => {

    const queryClient = new QueryClient()
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/post/:id' element={<Post />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/:id' element={<Home />} />
                        <Route path='/post/create' element={<PostCreat />} />
                    </Routes>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChakraProvider>
    )
}
export default App