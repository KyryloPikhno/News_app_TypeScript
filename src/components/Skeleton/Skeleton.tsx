import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';


function SkeletonChildrenDemo() {
    const loading = false

    return (
        <div>
            <Box>
                <Box sx={{margin: 1}}>
                    {!loading &&
                        Array(9).fill(0).map((item, i) => (
                            <Skeleton sx={{ height: 190 }}>

                            </Skeleton>)
                        )
                    }
                </Box>
            </Box>
        </div>
    );
}


export default function SkeletonChildren() {
    return (
        <Grid container spacing={8}>
            <Grid item xs>
                <SkeletonChildrenDemo />
            </Grid>
        </Grid>
    );
}