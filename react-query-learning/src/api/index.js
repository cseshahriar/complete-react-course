import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        Authorization: "Bearer f7b3aeeaf96b603009a3a1826ea6c938235d36ab6232fbe2c953d85064678db2"
    }
})

export const addNewPost = async ({ title, body }) => {
    try {
        const { data } = await api.post(
            `posts`,
            {
                title,
                body,
                user_id:694 // use edit
            }
        );
        return data;
    } catch (error) {
        throw Error(error.message);
    }
}

export const updatePost = async ({ title, body, id}) => {
    try {
        const { data } = await api.patch(
            `posts/${id}`,
            {
                title,
                body,
            }
        );
        return data;
    } catch (error) {
        throw Error(error.message);
    }
}

export const fetchPosts = async (id) => {
    try {
        const { data } = await api.get(
            `posts?page=${id}`
        );
        return data;
    } catch(error) {
        throw Error("Unable to fetch Posts");
    }
}

export const fetchPost = async (id) => {
    try {
        const { data } = await api.get(
            `posts/${id}`
        );
        return data;
    } catch(error) {
        throw Error("Unable to fetch Post");
    }
}

// ctrl + k and ctrl + 0