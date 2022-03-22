import React, { useState } from "react";
import {TableRow,TableCell,Checkbox,TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
    tablecell:{
        border:'1px solid rgba(224,224,224,1)',
        borderCollapse:'collapse',
        padding:['7px 5px','!important']
    },
    checkbox:{
        padding:['0px 0px','!important'],
        marginLeft:['10px','!important']
    },
    textfield:{
        width:'100%'
    }
});
const AddRow = ({addRows,rowId,data,setData}) => {
    const classes = useStyle();
    const [checkCheckbox,setCheckCheckbox] = useState(false);
    const handleChange = (e)=>{
        let result = data.filter(entry=>entry.id===Number(e.target.name))[0];
        if(!checkCheckbox){
            setCheckCheckbox(true);
            addRows(oldArr=>[...oldArr,rowId]);
            result={...result,id:rowId,check:true};
        }
        else{
            setCheckCheckbox(false); 
            result={...result,id:rowId,check:false};
        }
        let index = data.findIndex(value=>value.id === Number(e.target.name));
        if (index === -1){
            setData(oldArr=>[...oldArr,result]);
        }else{
           const newArr = Object.assign([...data],{[index]:result});
           setData(newArr);
        }
    };
    const onTextChange = (e)=>{
        let result = data.filter(entry=>entry.id===rowId)[0];
        result = {...result,id:rowId,[e.target.name]:[e.target.value]};
        let index = data.findIndex(value=>value.id === rowId);
        if (index === -1){
            setData(oldArr=>[...oldArr,result]);
        }else{
           const newArr = Object.assign([...data],{[index]:result});
           setData(newArr);
        }
    };
    return (<>
        <TableRow>
            <TableCell className={classes.tablecell}><Checkbox checked={checkCheckbox} name={rowId} onChange={(e)=>handleChange(e)} size="large" className={classes.checkbox} /></TableCell>
            <TableCell className={classes.tablecell}><TextField onChange={(e)=>onTextChange(e)} name="key" className={classes.textfield} inputProps={{
                style:{height:30,padding:'0px 5px'}
            }} /></TableCell>
            <TableCell className={classes.tablecell}><TextField onChange={(e)=>onTextChange(e)} name="value" className={classes.textfield} inputProps={{
                style:{height:30,padding:'0px 5px'}
            }}  /></TableCell>
        </TableRow>
    </>);
};
export { AddRow };