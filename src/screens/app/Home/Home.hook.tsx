import React ,{useEffect,useState} from 'react'

import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getCategory} from "../../../services/CategoryServices";
import {getListCategory} from '@redux';
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

    const listCategory=useSelector(getListCategory)
    const [data,setData]=useState(DataDefu)
    const [categories,setListCategory]=useState([])
    const [bestSells,setBestSells]=useState<any>([])
    useEffect(()=>{
        callApiForm()
    },[])

    useEffect(()=>{
        console.log("listCategory:",listCategory)
        setListCategory(listCategory)

    },[listCategory])
    const callApiForm=()=>{
        setBestSells(DataTest.data.data)
    }
    return{
        nav,data,categories,bestSells
    }
}
