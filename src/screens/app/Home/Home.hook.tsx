import React ,{useEffect,useState} from 'react'

import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getCategory} from "../../../services/CategoryServices";
import {DataTest} from "./block/DataTest";
const DataDefu=[
    {
        type:1
    },
    {
        type:2
    },
    {
        type:3
    },
    {
        type:4
    },
]
export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();

    const [data,setData]=useState(DataDefu)
    const [categories,setListCategory]=useState([])
    const [bestSells,setBestSells]=useState<any>([])
useEffect(()=>{
    callApiForm()
},[])

    const callApiForm=()=>{
        setBestSells(DataTest.data.data)
    }
    return{
        nav,data,categories,bestSells
    }
}
