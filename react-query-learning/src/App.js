import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
// 1. import `ChakraProvider` component
import { ChakraProvider, Heading } from '@chakra-ui/react'

// npm i react-query
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion formik formik-chakra-ui
// npm i axios react-router-dom


const App = () => {

    const queryClient = new QueryClient()
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <Heading>
                    Hello React Query
                </Heading>
            </QueryClientProvider>
        </ChakraProvider>
    )
}
export default App