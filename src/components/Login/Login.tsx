import React, {FC, useState} from "react";
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import { loginValidator } from "../../validators";
import {useNavigate} from "react-router";

type FormValues = {
    username: string;
    password: string;
};

const Login: FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: yupResolver(loginValidator)
    });

    const navigate = useNavigate()


    const submit = (obj: FormValues) => {
        const {username, password} = obj;
        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            navigate('/profile')
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{marginTop: 26, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography component="h1" variant="h5">
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
                            />
                            <Box>
                                {errors.username && (
                                    < Typography component="p" sx={{
                                        mt: 2,
                                        color: "red",
                                        fontSize: 10,
                                        textAlign: "center"
                                    }}>{errors.username.message}</Typography>
                                )}
                            </Box> </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                {...register('password')}
                            />
                            {errors.password && (
                                <Typography component="p" sx={{
                                    mt: 2,
                                    color: "red",
                                    fontSize: 10,
                                    textAlign: "center"
                                }}>{errors.password.message}</Typography>
                            )}
                        </Grid>
                    </Grid>
                    <Button type="submit"
                            fullWidth
                            variant="contained"
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


