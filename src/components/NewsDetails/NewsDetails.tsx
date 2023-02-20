import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {FC} from "react";

import {useAppLocation} from "../../hooks";
import {IPost} from "../../interfaces";


const NewsDetails: FC = () => {
    const {state: OneNews} = useAppLocation<IPost>();

    const {id, userId, title, body} = OneNews;

    return (
        <Box sx={{flexGrow: 0}}>
            <Card sx={{height: 810, overflow: 'scroll'}}>
                <CardMedia
                    component="img"
                    height="400"
                    image="https://t3.ftcdn.net/jpg/03/56/03/70/360_F_356037051_LSA3krwfHoQmhAGvin9wL4WghHI6qBC1.jpg"
                    alt="green iguana"
                    sx={{objectFit: "contain"}}

                />
                <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                    <Typography variant="body2" color="text.secondary">
                        Id: {id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        UserId: {userId}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Title: {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Body: {body}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error exercitationem ipsum
                        iste nostrum odio quidem vel. Accusamus architecto atque beatae cupiditate doloremque, ea eaque
                        harum laudantium perspiciatis velit! Rem. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium animi, cupiditate delectus ducimus error ipsam nihil non nostrum, officiis
                        optio quam qui reprehenderit tempore. Atque delectus nisi non totam velit! Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Debitis dignissimos distinctio dolorum esse, expedita, ipsam
                        libero magni nam porro, provident quaerat quia sed totam vitae voluptatem. Eaque error eum
                        repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis, dolorem
                        eveniet ipsa magni maxime natus nemo quibusdam, rem suscipit ullam voluptatibus. Facere nisi
                        nobis pariatur perspiciatis possimus! Beatae, dignissimos?
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export {NewsDetails};