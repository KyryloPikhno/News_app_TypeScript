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
                            <Typography sx={{marginTop: 3}} color="text.secondary">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis hic in, libero minus quae quibusdam quos reprehenderit rerum saepe sequi similique veritatis voluptates voluptatibus! Amet aspernatur consectetur delectus deleniti distinctio dolores doloribus ducimus ea eaque error et, expedita explicabo impedit ipsa iste mollitia nam nesciunt nihil nisi, numquam odio odit pariatur perferendis porro provident quae quasi qui quis quos rerum sequi sunt suscipit tempora vel veniam voluptate voluptatem? Ad alias aliquam animi architecto asperiores commodi consequuntur culpa cupiditate debitis dignissimos, dolorem doloribus dolorum et fugit impedit iusto maxime, nemo nesciunt nostrum perspiciatis porro quod quos recusandae reiciendis reprehenderit sed sequi soluta temporibus totam, voluptatibus. Aperiam autem doloremque iure minima nostrum, perspiciatis quos sint temporibus. Alias explicabo itaque iusto qui reiciendis sunt suscipit voluptateitaque odit perferendis provident quibusdam reprehenderit sed tenetur vel veritatis voluptatem voluptatibus? Ab commodi culpa debitis, distinctio eligendi esse, illum iure nobis quisquam repellendus similique soluta ullam. Accusantium, adipisci asperiores consequuntur deserunt dolore esse ipsam iusto neque officia omnis saepe sit sunt vero. Architecto blanditiis dolorem ea minus nesciunt odio porro praesentium, quis saepe unde voluptatum!   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aspernatur, consequuntur dicta dignissimos dolorem error excepturi labore molestiae nihil obcaecati odio odit quibusdam quis, quo quod similique sit voluptatum?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iste perferendis quod ut veritatis? Aperiam deleniti fugiat laudantium quaerat voluptatum. Cum dolor ipsam ipsum nobis nostrum odio placeat sed sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam at aut consequatur, earum et hic laudantium minima minus mollitia necessitatibus nesciunt obcaecati pariatur quam quasi quod ratione temporibus veniam!
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            }
        </div>
    );
};

export {Profile};