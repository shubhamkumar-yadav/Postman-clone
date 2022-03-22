import axios from 'axios';
import {getHeaderAndParams} from '../utils/Common-utils.jsx';
const getData = async (formData,paramData,headerData,jsonText)=>{
    const apiType = formData.type.toLowerCase();
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData);
    const apiParams = getHeaderAndParams(paramData);
    try {
        return await axios({method:apiType,url:apiURL,body:jsonText,headers:apiHeaders,params:apiParams});
    } catch (error) {
        console.log("Error while calling getData Api ",error);
        return false;
    }
};
export {getData};