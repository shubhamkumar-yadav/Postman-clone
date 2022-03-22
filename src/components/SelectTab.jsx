import React, { useContext, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CreateTable } from "./CreateTable.jsx";
import { CreateJsonText } from "./CreateJsonText.jsx";
import { DataContext } from "../context/DataProvider.jsx";
const useStyle = makeStyles({
    component:{
        marginTop:20
    },
    tab:{
        textTransform:['none','!important']
    }
});
const SelectTab = () => {
    const [value,setValue] = useState(0);
    const handleChange = (event,newValue)=>{
        setValue(newValue);
    };
    const {paramData,setParamData,headerData,setHeaderData} = useContext(DataContext);
    const classes = useStyle();
    return (<Box className={classes.component}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{sx:{backgroundColor:'#f26b3a',height:4,bottom:2}}} textColor='none' >
            <Tab label="Params"  className={classes.tab} />
            <Tab label="Headers" className={classes.tab}  />
            <Tab label="Body" className={classes.tab}  />
        </Tabs>
        <Box
            role="tabpanel"
            hidden={value !== 0}
            id={`simple-tabpanel-${0}`}
            aria-labelledby={`simple-tab-${0}`}
        >
            <CreateTable text={"Query Params"} data={paramData} setData={setParamData} />
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 1}
            id={`simple-tabpanel-${1}`}
            aria-labelledby={`simple-tab-${1}`}
        >
            <CreateTable text={"Headers"} data={headerData} setData={setHeaderData}/>
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 2}
            id={`simple-tabpanel-${2}`}
            aria-labelledby={`simple-tab-${2}`}
        >
            <CreateJsonText />
        </Box>
    </Box>);
};
export { SelectTab };