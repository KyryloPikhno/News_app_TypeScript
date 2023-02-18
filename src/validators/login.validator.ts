import * as Yup from 'yup';

import {regexp} from "../configs";

const loginValidator = Yup.object().shape({
    username: Yup.string()
        .required('Username is required')
        .matches(regexp.USERNAME,
            "Username don't match with regexp"
        ),
        // .min(6, 'Username must be at least 6 characters')
        // .max(20, 'Username must not exceed 20 characters'),
    password: Yup.string()
        .required('Password is required')
        .matches(regexp.PASSWORD,
            "Password don't match with regexp"
        )
});

export {loginValidator};