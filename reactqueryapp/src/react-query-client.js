import { QueryClient } from "react-query";
const client = new QueryClient({
    defaultOptions: {
        query: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
});
export default client;