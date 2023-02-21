import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import React, {FC, useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form"

import { loginValidator } from "../../validators";
import {authService} from "../../services";
import {config} from "../../configs";


type FormValues = {
    username: string;
    password: string;
};

const Login: FC = () => {
    const {register, handleSubmit, formState: {errors,isValid}} = useForm<FormValues>({
        resolver: yupResolver(loginValidator)
    });

    const [loginError, setLoginError] = useState<string | boolean>(false);

    const navigate = useNavigate();

    const submit = (obj: FormValues): void => {
        try {
            const {username, password} = obj;
            if (username === config.USERNAME && password === config.PASSWORD) {
                authService.setAuth(obj);

                navigate('/profile');
            } else {
                setLoginError('Wrong username or password')
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{marginTop: 26, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography component="h1" variant="h3">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit(submit)} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Username"
                                type="text"
                                id="username"
                                autoComplete="new-username"
                                {...register('username')}
                                error={(!!errors.username?.message) || (!!loginError)}
                                helperText={errors.username?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                {...register('password')}
                                error={(!!errors.password?.message) || (!!loginError)}
                                helperText={errors.password?.message || loginError}
                            />
                        </Grid>
                    </Grid>
                    <Button  type="submit"
                             fullWidth
                            variant="contained"
                            disabled={!isValid}
                            sx={{mt: 2, mb: 1}}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export {Login};


