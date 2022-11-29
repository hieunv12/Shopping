import {useDispatch} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useRef, useState} from "react";
import {DataTest} from "../Home/block/DataTest";
import { t } from "i18next";
import {getProduct} from "@services";


export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {params}:any=useRoute()
    const [data,setData]=useState([])
    const refBottom=useRef<any>(null)
     const [textFilter,setTextFilter]=useState('')
    const [filter,setFilter]=useState<any>()
    useEffect(()=>{
        callApi()
    },[])
    const callApi=(filter?:any)=>{
        // @ts-ignore
        let param:any={
            page_size:10,
            page_index:1,
        }
        if(params?.type==="category"){
            param["categoryId"]=params?.item?.id
        }
        getProduct(param,(res)=>{
            setData(res)
        },()=>{}).then()
    }
    const renderTextFilter=(dataFilter:any)=>{
        console.log(dataFilter?.sortPrice||dataFilter?.sortPrice!==0?t('txt_price')+(dataFilter?.sortPrice===1?t('txt_tang'):t('txt_giam')) :'')


      // return  (dataFilter?.sortName||dataFilter?.sortName!==0?t('txt_price')+(dataFilter?.sortName===1?t('txt_tang'):t('txt_giam')) :'')+
      //      (dataFilter?.sortPrice||dataFilter?.sortPrice!==0?+', '+t('txt_sort')+(dataFilter?.sortPrice===1?t('txt_tang'):t('txt_giam')) +', ':'') +
      //     (dataFilter?.setSortDate||dataFilter?.setSortDate!==0?+', '+t('txt_date') + (dataFilter?.setSortDate===1?t('a_z'):t('z_a')) +', ':'')+
      // (dataFilter?.priceStart ? t('txt_price') +(dataFilter?.priceStart && !dataFilter?.priceEnd ?t('low')+dataFilter?.priceStart:dataFilter?.priceStart):'') +dataFilter?.priceEnd?(' - '+dataFilter?.priceEnd && dataFilter?.priceStart?t('high')+dataFilter?.priceEnd:dataFilter?.priceEnd):''
    }
    const onFilter=(value:any)=>{
        console.log('value:',value,value?.sortPrice)
        let txt=(value?.sortPrice?(value?.sortPrice!==0?t('txt_price')+(value?.sortPrice===1?t('txt_tang'):t('txt_giam')) :''):'')+
                (value?.sortName?(value?.sortName!==0?', '+t('txt_sort')+(value?.sortName===1?t('a_z'):t('z_a')) +', ':''):'')+
                (value?.sortDate?(value?.sortDate!==0?', '+t('txt_date') + (value?.sortDate===1?t('news'):t('old')):''):'')+
                (value?.priceStart ?', '+ t('txt_about_price')+" " +(value?.priceStart && !value?.priceEnd ?'> '+value?.priceStart:value?.priceStart):'') +
                (value?.priceEnd? (value?.priceEnd && !value?.priceStart?', '+ t('txt_about_price')+" "+value?.priceEnd+' < ':' - '+value?.priceEnd):'')



        // (value?.sortPrice||value?.sortPrice!==0?+', '+t('txt_sort')+(value?.sortPrice===1?t('txt_tang'):t('txt_giam')) +', ':'') +
        // (value?.setSortDate||value?.setSortDate!==0?+', '+t('txt_date') + (value?.setSortDate===1?t('a_z'):t('z_a')) +', ':'')+
        // (value?.priceStart ? t('txt_price') +(value?.priceStart && !value?.priceEnd ?t('low')+value?.priceStart:value?.priceStart):'') +value?.priceEnd?(' - '+value?.priceEnd && value?.priceStart?t('high')+value?.priceEnd:value?.priceEnd):''
        setTextFilter(txt)
        console.log('txt:',txt)
        setFilter(value)
        let params={

        }
    }
    return{
        nav,
        params,
        data,
        onFilter,
        refBottom,
        renderTextFilter,
        filter,
        textFilter
    }
}
