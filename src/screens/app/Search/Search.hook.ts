import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {useCallback, useEffect, useRef, useState} from "react";
import debounce from "lodash/debounce";
import {getProduct} from "@services";
export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const [text,setText]=useState('')
    const [data,setData]=useState<any>([])
    const refInput=useRef<any>()
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
       if(refInput){
           refInput?.current?.focus()
       }
    },[refInput])
    const callApiSearch=useCallback((value: string)=>{
        setLoading(true)
        let param={
            name:value
        }
        getProduct(param,(res)=>{
            setData(res)
            setLoading(false)
        },()=>{
            setLoading(false)
        }).then()
    },[])
    const searchProduct=(value:any)=>{
            setText(value)

    }
    return{
        nav,
        text,
        searchProduct,
        refInput,
        data,
        loading,
        callApiSearch
    }
}
