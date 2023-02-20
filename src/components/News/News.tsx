import {Box, Button, CircularProgress, Grid, Paper} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {FC, useEffect} from "react";
import {styled } from '@mui/material/styles';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {newsAction} from "../../redux/slice/news.slice";
import {NewsCard} from "../NewsCard/NewsCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const News: FC = () => {
    const {news, loading} = useAppSelector(state => state.newsReducer)

    const [searchParams, setSearchParams]: [URLSearchParams, Function] = useSearchParams({_limit: '10'});

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(newsAction.getAll({_limit: searchParams.get('_limit')}));
    }, [dispatch, searchParams]);

    let limit = Number(searchParams.get('_limit'));
    const handler = (): void => {
        try {
            let res = limit + 10
            if (searchParams.get('_limit')) {
                setSearchParams({_limit: res.toString()});
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div>
            {loading
                ?
                <Box sx={{height: 700, flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CircularProgress size={100}/>
                </Box>
                :
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                        {news && news.map((oneNews, index) => <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item><NewsCard key={oneNews.id} oneNews={oneNews}/></Item></Grid>)}
                    </Grid>
                    <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                        <Button style={{marginTop: 20}} variant="contained" disableElevation
                                onClick={handler}
                        >
                            Load More
                        </Button>
                    </Box>
                </Box>
            }
        </div>
    );
};

export {News};