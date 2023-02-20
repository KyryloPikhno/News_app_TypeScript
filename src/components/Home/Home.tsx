import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {FC} from "react";

const Home: FC = () => {
    return (
        <Box sx={{flexGrow: 0}}>
            <Card sx={{height: 810}}>
                <CardContent  sx={{display:'flex',flexDirection:'column',gap:20}}>
                    <Typography sx={{height: 115,textAlign:'center'}} gutterBottom variant="h5" component="div">
                        WELCOME ON OUR PLATFORM                    </Typography>
                    <CardMedia
                        component="img"
                        height="310"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUufwNUpDO-QJgbjTP78P6r1XxX9pHyfVwJg&usqp=CAU"
                        alt="green iguana"
                        sx={{minHeight: 110, maxHeight: 130,padding: "1em 1em 0 1em", objectFit: "contain"}}

                    />
                    <Typography sx={{height: 130}} variant="body2" color="text.secondary">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error exercitationem ipsum iste nostrum odio quidem vel. Accusamus architecto atque beatae cupiditate doloremque, ea eaque harum laudantium perspiciatis velit! Rem.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi, cupiditate delectus ducimus error ipsam nihil non nostrum, officiis optio quam qui reprehenderit tempore. Atque delectus nisi non totam velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dignissimos distinctio dolorum esse, expedita, ipsam libero magni nam porro, provident quaerat quia sed totam vitae voluptatem. Eaque error eum repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis, dolorem eveniet ipsa magni maxime natus nemo quibusdam, rem suscipit ullam voluptatibus. Facere nisi nobis pariatur perspiciatis possimus! Beatae, dignissimos?
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export {Home};