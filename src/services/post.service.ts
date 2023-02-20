import {AxiosRes, axiosService} from "./axios.service";

import {IPost} from "../interfaces";
import {urls} from "../configs";

const postService = {
    getAll: (_limit: string | number | null): AxiosRes<IPost[]> => axiosService(urls.posts, {
        params: {
            _limit
        }
    })
};

export {postService};