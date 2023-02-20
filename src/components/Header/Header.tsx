import React, {FC, useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton, Menu,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router";

import {authService} from "../../services";


const Header: FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();

    const handleLogout = ():void => {
        try {
            authService.removeAuth();

            navigate('/login');
        } catch (e) {
            console.log(e)
        }
    };

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
                        NewsApp
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
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                <NavLink to={'/'}>Home</NavLink>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                <NavLink to={'/news'}>News</NavLink>
                            </Button>

                            {localStorage.getItem('username') && <Button
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                <NavLink
                                    to={!localStorage.getItem('username') ? '/login' : '/profile'}>Profile</NavLink>
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
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        NewsApp
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <nav onClick={()=>navigate('/')}>Home</nav>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <nav onClick={()=>navigate('/news')}>News</nav>
                        </Button>
                    </Box>
                    <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
                        <Button
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <nav onClick={()=>navigate(!localStorage.getItem('username') ? '/login' : '/profile')}
                                >{!localStorage.getItem('username') ? 'Login' : 'Profile'}</nav>                        </Button>
                        <Button
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <nav onClick={handleLogout}>{localStorage.getItem('username') && 'Logout'}</nav>
                        </Button>
                    </Box>
                        <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
                                {
                                    localStorage.getItem('username')?
                                        <Button onClick={handleLogout}
                                            sx={{my: 2, color: 'white', display: 'block'}}
                                        >
                                       Logout
                                        </Button>
                                    :
                            <Button onClick={()=>navigate('/login')} sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                       Login
                            </Button>
                                }
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export {Header};