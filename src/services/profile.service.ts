import {AxiosRes, } from "./axios.service";

import {IPost} from "../interfaces";
import axios from "axios";

const profileService = {
    get: (): AxiosRes<IPost[]> => axios.get('https://api.github.com/users/KyryloPikhno'),
};

export {profileService};