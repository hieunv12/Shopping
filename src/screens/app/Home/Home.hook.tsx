import React ,{useEffect,useState} from 'react'

import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
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
    return{
        nav,data
    }
}
