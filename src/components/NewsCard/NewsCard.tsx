import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {FC} from "react";
import { useAppDispatch } from "../../hooks";

import {IPost} from "../../interfaces";
import {newsAction} from "../../redux/slice/news.slice";

type IProps = {
    oneNews: IPost
};
const NewsCard: FC<IProps> = ({oneNews}) => {

    const dispatch = useAppDispatch();

    const {id, title, body} = oneNews;

    return (
        <Card sx={{minHeight: 310, maxHeight: 630}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="310"
                    image="https://t3.ftcdn.net/jpg/03/56/03/70/360_F_356037051_LSA3krwfHoQmhAGvin9wL4WghHI6qBC1.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{height: 115}} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{height: 130}} variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button sx={{height: 20}} size="small" color="primary">
                    Details
                </Button>
                <Button onClick={() => dispatch(newsAction.deleteById(id))} sx={{height: 20}} size="small"
                        color="secondary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export {NewsCard};