import * as Yup from 'yup';

import {regexp} from "../configs";

const loginValidator = Yup.object().shape({
    username: Yup.string()
        .required('Username is required')
        .matches(regexp.USERNAME,
            "Username doesn't match with regexp"
        ),
    password: Yup.string()
        .required('Password is required')
        .matches(regexp.PASSWORD,
            "Password doesn't match with regexp"
        )
});

export {loginValidator};