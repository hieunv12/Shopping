import {useDispatch} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useRef, useState} from "react";
import {DataTest} from "../Home/block/DataTest";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {params}:any=useRoute()
    const [data,setData]=useState([])
    const refBottom=useRef<any>(null)
    useEffect(()=>{
        callApi()
    },[])
    const callApi=()=>{
        // @ts-ignore
        setData(DataTest.data.data)
    }
    const onFilter=()=>{

    }
    return{
        nav,
        params,
        data,
        onFilter,
        refBottom
    }
}
