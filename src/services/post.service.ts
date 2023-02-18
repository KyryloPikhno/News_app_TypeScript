import {AxiosRes, axiosService} from "./axios.service";

import {IPost} from "../interfaces";
import {urls} from "../configs";

const postService = {
    getAll: (): AxiosRes<IPost[]> => axiosService(urls.posts)
};

export {postService};