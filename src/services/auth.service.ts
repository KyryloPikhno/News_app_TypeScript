type FormValues = {
    username: string;
    password: string;
};
const authService = {
    setAuth: ({username, password}: FormValues): void => {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
    },
    removeAuth: (): void => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
    },
};

export {authService};