import React from "react";
import {makeStyles} from '@mui/styles';
const useStyle = makeStyles({
    logo:{
        width:100,
        padding:10,
        margin:'5px 0px 0px 10px'
    }
});
const Header = ()=>{
    const logo = "https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png";
    const classes = useStyle();
    return(<>
    <img src={logo} alt="logo" className={classes.logo} />
    </>);
};
export{Header};