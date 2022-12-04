import React ,{useEffect,useState} from 'react'

import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getListCategory} from '@redux';
import {DataTest} from "./block/DataTest";
import {getProduct} from "@services";
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
    const [newProduct,setNewProdct]=useState<any>([])
    const [saleProduct,setSaleProduct]=useState<any>([])
    useEffect(()=>{
        callApiForm()

    },[])

    useEffect(()=>{
        setListCategory(listCategory)
    },[listCategory])


    const callApiForm=()=>{
      Promise.all([
          callApiBestSell(),
          callApiNewProduct(),
          callApiSaleProduct()

      ])
    }
    const callApiBestSell =()=>{
        let params={
            page_size:10,
            page_index:1,
            sort:"totalSold"
        }
        getProduct(params,(res)=>{
            setBestSells(res)
        },()=>{}).then()
    }
    const callApiNewProduct=()=>{
        let params={
            page_size:10,
            page_index:1,
            sort:"createdDate"
        }
        getProduct(params,(res)=>{
            setNewProdct(res)
        },()=>{}).then()
    }
    const callApiSaleProduct=()=>{
        let params={
            page_size:10,
            page_index:1
        }
        getProduct(params,(res)=>{
            setSaleProduct(res)
        },()=>{}).then()
    }
    return{
        nav,data,categories,bestSells,saleProduct,newProduct
    }
}
