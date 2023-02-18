import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {newsAction} from "../../redux/slice/news.slice";
import {NewsCard} from "../NewsCard/NewsCard";
import {Box, Grid, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const News: FC = () => {
    const {news, loading} = useAppSelector(state => state.newsReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(newsAction.getAll());
    }, [dispatch]);

    return (
        <div>
            {loading
                ?
                (<div></div>)
                :
                (<Box sx={{flexGrow: 1}}>
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 16}}>
                            {news && news.map((oneNews, index) => <Grid item xs={2} sm={4} md={4} key={index}>
                                <Item><NewsCard key={oneNews.id} oneNews={oneNews}/></Item></Grid>)}
                        </Grid>
                    </Box>
                )}
        </div>
    );
};

export {News};