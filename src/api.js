import axios from 'axios';
import { NEWS_API_KEY } from "./config";

const instance = 
    axios.create({ baseURL: `http://newsapi.org/v2`});

async function getByCategory(category) {
    const response = await (await instance.get(`/top-headlines?apiKey=${NEWS_API_KEY}&category=${category}&sortBy=publishedAt&country=us`)).data.articles;
    return response;
}

const instancePosts=  axios.create({ baseURL: `https://5f63d2bf363f0000162d9181.mockapi.io`});

async function createPost(post) {
    await instancePosts.post(`/LiveNews`, post);
}
async function getPosts() {
    return await instancePosts.get(`/LiveNews`);
}

async function getPost(id) {
    return (await instancePosts.get(`/LiveNews/${id}`)).data;
}

async function updatePost(post) {
     await instancePosts.put(`/LiveNews/${post.id}`, post);
}

async function deletePost(id) {
     await instancePosts.delete(`/LiveNews/${id}`);
}
export default {
    getByCategory,
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost

};
