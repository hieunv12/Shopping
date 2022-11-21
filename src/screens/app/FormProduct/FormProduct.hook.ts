import {useDispatch} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {DataTest} from "../Home/block/DataTest";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {params}:any=useRoute()
    const [data,setData]=useState([])

    useEffect(()=>{
        callApi()
    },[])
    const callApi=()=>{
        setData(DataTest.data.data)
    }
    return{
        nav,
        params,
        data
    }
}
