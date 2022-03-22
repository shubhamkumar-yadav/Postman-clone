const checkValidJson = (text)=>{
    if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))){
        return true;
    }else{
        return false;
    }
};
const checkParams = (formData,paramData,headerData,jsonText,setErrorMsg)=>{
    if(!formData.url){
        setErrorMsg('Request URL is Missing');
        return false;
    }
    if(!checkValidJson(jsonText)){
        setErrorMsg('Text s not a Valid json');
        return false;
    }
    return true;
};
const getHeaderAndParams = (objArr)=>{
    let obj = {};
    objArr.forEach(data=>{
        if (data.hasOwnProperty('check')&&data.check){
            obj={...obj,[data.key]:data.value}
        }
    });
    return obj;
};
export {checkParams,getHeaderAndParams};