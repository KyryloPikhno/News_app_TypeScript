import {FC, useEffect} from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Typography
} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import { profileAction } from "../../redux/slice/profile.slice";


const Profile: FC = () => {
    const {profile, loading} = useAppSelector(state => state.profileReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(profileAction.getProfile());
    }, [dispatch]);

    return (
        <div>
            {loading
                ?
                <Box sx={{height: 700, flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CircularProgress size={100}/>
                </Box>
                :
                <Box sx={{flexGrow: 0}}>
                    <Card sx={{height: 810}}>
                        <CardMedia
                            component="img"
                            height="210"
                            image={profile?.avatar_url}
                            alt="green iguana"
                            sx={{padding: "1em 1em 0 1em", objectFit: "contain"}}
                        />
                        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography sx={{height: 30}} gutterBottom variant="h5" component="div">
                                Name: {profile?.login}
                            </Typography>
                            <Typography color="text.secondary">
                                Bio: {profile?.bio}
                            </Typography>
                            <Typography color="text.secondary">
                                Location: {profile?.location}
                            </Typography>
                            <Typography color="text.secondary">
                                Created_at: {profile?.created_at}
                            </Typography>
                            <Typography color="text.secondary">
                                Updated_at: {profile?.updated_at}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            }
        </div>
    );
};

export {Profile};