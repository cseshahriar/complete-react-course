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

import Home from "./Components/Home";
const App = () => {

    const queryClient = new QueryClient()
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ChakraProvider>
    )
}
export default App