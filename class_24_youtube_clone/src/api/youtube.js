import axios from "axios";

// AIzaSyCpqFb4UmogECg8b8xR0OMY8SRf_L3LgFI

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // params: {
    //     part: 'snippet',
    //     maxResults: 5,
    //     key:'[API KEY]'
    // }
})