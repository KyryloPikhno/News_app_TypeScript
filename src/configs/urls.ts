import {config} from "./config";

const baseURL: string = config.BASE_URL;

const profileURL: string = config.PROFILE_URL;

const urls: { posts: string; } = {
    posts: '/posts',
};

export {baseURL, profileURL, urls};