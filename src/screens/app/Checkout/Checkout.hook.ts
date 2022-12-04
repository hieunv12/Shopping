import {useDispatch, useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {getProfileUser, setListCart} from "@redux";
import {useEffect, useState} from "react";
import {goBack, navigate, SCREEN_ROUTE} from "@navigation";
import {getCart, onCheckoutCart} from "@services";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const param:any=useRoute()
    const infoUserName=useSelector(getProfileUser)
    const {params}=param
    const [addressDef,setAddressDef]=useState<any>([])
    const [isPayment,setIsPayment]=useState(false)
    useEffect(()=>{
        if(infoUserName.address){
            setAddressDef(infoUserName?.addressSelect)
        }
    },[infoUserName])
    const onEditAddress=()=>{
        navigate(SCREEN_ROUTE.ADDRESS,{
            type:"Checkout",
        })
    }
    const callApiCart=()=>{
        getCart(undefined,(res:any)=>{
            if(res.length >0){
                dispatch(setListCart(res))
            }else {
                dispatch(setListCart([]))
            }


        },()=>{}).then()
    }
    const onCheckout = ()=>{

        let newProduct=params?.items.products.map((elm:any)=>{
            return{
                productDetailId:elm.productDetailId,
                quantity:elm?.quantity,
                orderDetailId:elm?.orderId
            }
        })

        let param={
            "name": addressDef.name,
            "phone": addressDef.phone,
            "address": addressDef.address,
            "paymentMethod": isPayment?0:1,
            "products":newProduct,
            "price": params?.items?.total,
            // "discount": 50000
        }

        onCheckoutCart(param,(res)=>{
            goBack()
            callApiCart()
        },()=>{

        }).then()
    }
    return{
        nav,
        params,
        infoUserName,
        addressDef,
        onEditAddress,isPayment,setIsPayment,onCheckout
    }
}
