import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
    error:{
        width:'60%',
        height:'auto',
        margin:'auto',
        objectPosition:'center 0%'
    }
});
const ErrorScreen = () => {
    const classes = useStyle();
    const error = 'https://i.stack.imgur.com/01tZQ.png';
    return (<>
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <Box style={{display:'flex'}}>
                <img src={error} alt="error" className={classes.error} />
            </Box>
        </Box>
    </>);
};
export { ErrorScreen };