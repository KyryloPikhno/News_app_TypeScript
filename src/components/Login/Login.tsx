import {Button, TextField} from "@mui/material";
import { useForm, SubmitHandler, Controller,useFormState } from "react-hook-form";

import React, { FC } from "react";
import {loginValidator} from "../../validators";
import {yupResolver} from "@hookform/resolvers/yup";

    interface ISignInForm {
        login: string;
        password: string;
    }
const Login:FC = () => {
    const {handleSubmit, reset, control} = useForm<ISignInForm>({
        // resolver: yupResolver(loginValidator)
    });
    // const { errors } = useFormState({
    //     control
    // })


        const onSubmit: SubmitHandler<ISignInForm> = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="password"
                rules={{
                    required: true
                }}
                render={({field, fieldState: {error}}) => (
                    <TextField {...field} type="password" error={error !== undefined} />
                )}
            />
            {/*<Controller*/}
            {/*    control={control}*/}
            {/*    name="name"*/}
            {/*    render={({ field: { onChange, value } }) => (*/}
            {/*        <TextField onChange={onChange} value={value} label={"Text Value"} />*/}
            {/*    )}*/}
            {/*/>*/}
            <Button>Submit</Button>
            {/*<Button onClick={() => reset()} variant={"outlined"}>Reset</Button>*/}
        </form>
        // <div className="auth-form">
        //     <Typography variant="h4" component="div">
        //         Войдите
        //     </Typography>
        //     <Typography variant="subtitle1" gutterBottom component="div" className="auth-form__subtitle">
        //         Чтобы получить доступ
        //     </Typography>
        //     <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
        //         <Controller
        //             control={control}
        //             name="login"
        //             // rules={loginValidation}
        //             render={({ field }) => (
        //                 <TextField
        //                     label="Логин"
        //                     onChange={(e) => field.onChange(e)}
        //                     value={field.value}
        //                     fullWidth={ true }
        //                     size="small"
        //                     margin="normal"
        //                     className="auth-form__input"
        //                     error={!!errors.login?.message}
        //                     helperText={ errors?.login?.message }
        //                 />
        //             )}
        //         />
        //         <Controller
        //             control={control}
        //             name="password"
        //             // rules={passwordValidation}
        //             // render={({ field }) => (
        //                 <TextField
        //                     label="Пароль"
        //                     onChange={(e) => field.onChange(e)}
        //                     value={field.value}
        //                     fullWidth={ true }
        //                     size="small"
        //                     margin="normal"
        //                     type="password"
        //                     className="auth-form__input"
        //                     error={ !!errors?.password?.message }
        //                     helperText={ errors?.password?.message }
        //                 />
        //             )}
        //         />
        //         <Button
        //             type="submit"
        //             variant="contained"
        //             fullWidth={ true }
        //             disableElevation={ true }
        //             sx={{
        //                 marginTop: 2
        //             }}
        //         >
        //             Войти
        //         </Button>
        //     </form>
        //
        //     <div className="auth-form__footer">
        //         <Typography variant="subtitle1" component="span">
        //             Нету аккаунта?{" "}
        //         </Typography>
        //         <Typography variant="subtitle1" component="span" sx={{ color: 'blue'}}>
        //             Зарегистрируйтесь
        //         </Typography>
        //     </div>
        // </div>
    );
};

export {Login};