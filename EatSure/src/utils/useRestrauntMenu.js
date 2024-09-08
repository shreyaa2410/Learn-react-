import { useState, useEffect } from "react";
import {RES_MENU} from './constants';
const useRestrauntMenu=(resId)=>{
    const [resInfo,setResInfo]= useState(null);
    useEffect(()=>{
      fetchData();
    },[])
    const fetchData = async()=>{
      const data= await fetch(RES_MENU+ resId);
      const jsonData = await data.json();
      setResInfo(jsonData);
    }
    return resInfo;
}

export default useRestrauntMenu;