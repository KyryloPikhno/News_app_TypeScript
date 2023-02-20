import {Outlet} from "react-router";
import {FC, Fragment} from "react";

import {Footer, Header} from "../components";
import Container from "@mui/material/Container/Container";
import {CssBaseline} from "@mui/material";


const MainLayout: FC = () => {
    return (

        <Fragment>
            <CssBaseline/>
            <Container style={{marginBottom: 20}}>
                <Header/>
            </Container>
            <Container style={{marginBottom: 20, minHeight: 800}}>
                <Outlet/>
            </Container>
            <Container>
                <Footer/>
            </Container>
         </Fragment>
    );
};

export {MainLayout};