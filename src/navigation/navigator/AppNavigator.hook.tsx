import React ,{useEffect,useState} from 'react'

import {useDispatch, useSelector} from "react-redux";

import SplashScreen from "react-native-splash-screen";
import {getCategory} from "../../services/CategoryServices";
import {getTokenUserFromStore, setCategory, setListCart} from "@redux";
import {getCart} from "../../services/CartServices";
export function useModel(props: any) {
    const dispatch = useDispatch();
    const token = useSelector(getTokenUserFromStore);
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    useEffect(() => {
        callApiCategory()
    }, [token]);

    useEffect(()=>{
        if(token){
            callApiCart()
        }
    },[token])
    const callApiCart=()=>{
        getCart(undefined,(res:any)=>{
            console.log('res:',res)
            if(res.length >0){
                let listCart=res.map((elm:any)=>{
                    return {
                        ...elm,
                        select:false
                    }
                })
                dispatch(setListCart(listCart))
            }else {
                dispatch(setListCart([]))
            }


        },()=>{}).then()
    }
    const callApiCategory=()=>{
        getCategory(undefined,(res:any)=>{
            dispatch(setCategory(res))
        },()=>{}).then()
    }
    return{
        token
    }
}
