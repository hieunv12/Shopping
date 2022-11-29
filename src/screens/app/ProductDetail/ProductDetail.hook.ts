import {useDispatch} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useRef, useState} from "react";
import {getProductDetail} from "@services";
import unionBy from 'lodash/unionBy';
export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {params}:any=useRoute()
    const [data,setData]=useState<any>()
    const [sizes,setSizes]=useState([])
    const [colors,setColors]=useState([])
    const [sizeSelect,setSizeSelect]=useState<any>(undefined)
    const [colorSelect,setColorSelect]=useState<any>(undefined)
    const [value,setValue]=useState<any>()
    const [amount, setAmount] = useState(1);
    const refProduct=useRef<any>(null)
    useEffect(()=>{
        callApi()
    },[])

    const callApi=()=>{
        getProductDetail(params?.id,undefined,(res)=>{
            setData(res)
        },(error)=>{

        }).then()
    }
    useEffect(()=>{
        if(colorSelect){
            let newSizes:any=data?.productDetails?data?.productDetails.filter((elm:any)=>elm.color===colorSelect?.color):[]
            setSizes(newSizes)
            setValue(newSizes)
        }else {
            let newData=data?.productDetails
            newData = unionBy(newData, 'color');
            setColors(newData)
        }
    },[data,colorSelect])
    useEffect(()=>{
        if(sizeSelect){
            let newProductDetail=data?.productDetails
            let newColors:any=newProductDetail.filter((elm:any)=>elm.size===sizeSelect?.size)
            setColors(newColors)
            setValue(newColors)
        }else {
            let newData=data?.productDetails
             newData = unionBy(newData, 'size');
            setSizes(newData)
        }
    },[data,sizeSelect])

    const BuyNow=()=>{
        let param={

        }
    }
    const AddCart =()=>{
        let param={

        }
    }
    return{
        nav,
        data,
        sizes,
        colors,
        setColors,
        setSizes,
        setSizeSelect,
        setColorSelect,
        amount, setAmount,
        refProduct,
        value
    }
}
