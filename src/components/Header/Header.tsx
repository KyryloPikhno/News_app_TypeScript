import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, {FC,  useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Container,
    FormControl,
    IconButton, InputLabel, Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";

import {authService} from "../../services";


const Header: FC = () => {
    const {t, i18n} = useTranslation();

    const [language, setLanguage] = useState<undefined | string>('');

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const handleChange = async (event: SelectChangeEvent) => {
        await setLanguage(event.target.value as string);

        await i18n.changeLanguage(event.target.value);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigator = (route: string): void => {

        navigate(route);

        setAnchorElNav(null);
    };

    const handleLogout = (): void => {
        try {
            authService.removeAuth();

            navigate('/login');
        } catch (e) {
            console.log(e)
        }
    };

    const username: string | null = localStorage.getItem('username')
    const password: string | null = localStorage.getItem('password')

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {t('NewsApp.NewsApp')}

                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <Button
                                onClick={()=>navigator('/')}
                                sx={{my: 2, color: 'black', display: 'block'}}
                            >
                                {t('Home.Home')}
                            </Button>
                            <Button
                                onClick={()=>navigator('/news')}
                                sx={{my: 2, color: 'black', display: 'block'}}
                            >
                                {t('News.News')}
                            </Button>
                            {(username && password) && <Button
                                onClick={()=>navigator(!(username && password) ? '/login' : '/profile')}
                                sx={{my: 2, color: 'black', display: 'block'}}
                            >
                                {t('Profile.Profile')}
                            </Button>}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            position: 'absolute',
                            left: "40%",
                            display: {md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {t('NewsApp.NewsApp')}
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <nav onClick={() => navigate('/')}>{t('Home.Home')}</nav>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <nav onClick={() => navigate('/news')}>{t('News.News')}</nav>
                        </Button>
                    </Box>
                    <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
                        {!(username && password) ? <Button sx={{my: 2, color: 'white', display: 'block'}}>
                                <nav onClick={() => navigate(!(username && password) ? '/login' : '/profile')}>
                                    {t('Login.Login')}
                                </nav>
                            </Button> :
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>
                                <nav onClick={() => navigate(!(username && password) ? '/login' : '/profile')}>
                                    {t('Profile.Profile')}
                                </nav>
                            </Button>
                        }
                        {(username && password) && <Button
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <nav onClick={handleLogout}>{t('Logout.Logout')}</nav>
                        </Button>}
                    </Box>
                    <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
                        {
                            (username && password) ?
                                <Button onClick={handleLogout}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {t('Logout.Logout')}
                                </Button>
                                :
                                <Button onClick={() => navigate('/login')}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {t('Login.Login')}
                                </Button>
                        }
                    </Box>
                    <FormControl sx={{m: 1, minWidth: 80}}>
                        <InputLabel id="demo-simple-select-autowidth-label">{t('Language.Language')}</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={language}
                            onChange={handleChange}
                            autoWidth
                            label="language"
                        >
                            <MenuItem value={'uk'}>{t('UK.UK')}</MenuItem>
                            <MenuItem value={'en'}>{t('EN.EN')}</MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export {Header};