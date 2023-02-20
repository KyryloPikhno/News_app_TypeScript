interface IConfig {
    BASE_URL: string;
    PROFILE_URL: string;
    USERNAME: string;
    PASSWORD: string;
}

const config:IConfig ={
    BASE_URL: process.env.REACT_APP_BASE_URL || 'https://jsonplaceholder.typicode.com',
    PROFILE_URL:process.env.REACT_APP_PROFILE_URL || 'https://api.github.com/users/KyryloPikhno',

    USERNAME: process.env.REACT_APP_USERNAME || 'admin',
    PASSWORD: process.env.REACT_APP_PASSWORD || '12345',
};

export {config};