import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getListOrderByStatus} from "@services";
import {useEffect, useRef, useState} from "react";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const refFlatList=useRef<any>()
    const [numTab,setNumTab]=useState(0)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [numUnConfimred,setNumUnConfimred]=useState(false)
    const [indexOrder,setIndexOrder]=useState(1)
    useEffect(()=>{
        if(numTab!==0){
            callApi(indexOrder)
        }else {
            callApi(numUnConfimred?2:1)
        }

    },[indexOrder,numUnConfimred])
    useEffect(() => {
        const unsubscribe = nav.addListener("focus", () => {
            console.log('lllllllllll',numTab,numUnConfimred)
            callApi(indexOrder)
           //  // console.log()
           // // setNumUnConfimred(false)
           //
           //  // setListOrder([]);
        });
        return unsubscribe;
    }, [nav]);

    useEffect(()=>{
    })
    const callApi=(status?:number)=>{
        console.log(status,numUnConfimred,indexOrder)
        setLoading(true)
        let param={
            status:numUnConfimred?2:status
        }
        getListOrderByStatus(param,(res)=>{
            setData(res)
            setLoading(false)
        }).then()
    }
    return{
        nav,refFlatList,numTab,setNumTab,data,setData,loading,
        numUnConfimred,setNumUnConfimred,setIndexOrder
    }
}
