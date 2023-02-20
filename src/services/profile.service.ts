import axios from "axios";

import {AxiosRes} from "./axios.service";
import {IProfile} from "../interfaces";
import {config} from "../configs";

const profileService = {
    get: (): AxiosRes<IProfile> => axios.get(config.PROFILE_URL),
};

export {profileService};