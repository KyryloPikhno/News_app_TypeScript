import {FC} from "react";
import {
    AppBar,
    Container,
    Toolbar,
    Typography
} from "@mui/material";


const Footer: FC = () => {

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
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        NewsApp
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export {Footer};