import {useTranslation} from "react-i18next";
import {FC} from "react";
import {
    AppBar,
    Container,
    Toolbar,
    Typography
} from "@mui/material";


const Footer: FC = () => {
    const {t} = useTranslation();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar style={{height:150}} disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 750,
                            fontSize:15,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >

                        {t('NewsApp.NewsApp')}
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export {Footer};