import React, { useContext,useState } from "react";
import { Header } from "./Header.jsx";
import { Form } from "./Form.jsx";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SelectTab } from "./SelectTab.jsx";
import { Response } from "./Response.jsx";
import { ErrorScreen } from "./ErrorScreen.jsx";
import { DataContext } from "../context/DataProvider.jsx";
import { checkParams } from "../utils/Common-utils.jsx";
import { SnackBar } from "./SnackBar.jsx";
import { getData } from "../service/api.js";

const useStyle = makeStyles({
    component:{
        width:'60%',
        margin:'20px auto 0 auto'
    }
});
const Home = () => {
    const classes = useStyle();
    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    const [errorResponse,setErrorResponse] = useState(false);
    const [apiResponse,setApiResponse] = useState({});
    const {formData,paramData,headerData,jsonText} = useContext(DataContext);
    const onSendClick = async ()=>{
        if(!checkParams(formData,paramData,headerData,jsonText,setErrorMsg)){
            setError(true);
            return false;
        }
        let response = await getData(formData,paramData,headerData,jsonText);
        if (response === 'error'){
            setErrorResponse(true);
            return;
        }else{
            setApiResponse(response.data);
            setErrorResponse(false);
        }
    };
    return (<>
        <Header />
        <Box className={classes.component}>
            <Form onSendClick={onSendClick}/>
            <SelectTab />
            {errorResponse ? <ErrorScreen /> : <Response data={apiResponse} /> }
            {error && <SnackBar error = {error} setError={setError} errorMsg={errorMsg} />}
        </Box>
    </>);
};
export { Home };