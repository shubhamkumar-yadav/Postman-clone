import React, { useContext } from "react";
import { Box,Select,MenuItem,TextField,Button} from '@mui/material';
import { makeStyles } from "@mui/styles";
import {DataContext} from '../context/DataProvider.jsx';
const useStyle = makeStyles({
    select:{
        width:150,
        height:40
    },
    textfield:{
        width:'100%',
        background:'#f6f6f6'
    },
    component:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    button:{
        width:'100px',
        height:40,
        marginLeft:[5,'!important']
    }
});
const Form = ({onSendClick}) => {
    const classes = useStyle();
    const {formData,setFormData} = useContext(DataContext);
    const handleChange = (e)=>{
        setFormData({...formData,type:e.target.value})
    };
    const onUrlChange = (e)=>{
        setFormData({...formData,url:e.target.value})
    };
    return (<>
        <Box className={classes.component}>
            <Select
                value={formData.type}
                label="POST"
                onChange={(e)=>handleChange(e)}
                className={classes.select}
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField size="small" className={classes.textfield} onChange={(e)=>onUrlChange(e)} />
            <Button onClick={()=>onSendClick()} className={classes.button} variant='contained'>Send</Button>
        </Box>
    </>);
};
export { Form };