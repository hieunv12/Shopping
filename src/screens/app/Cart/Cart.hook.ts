import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getInfoCart} from "../../../redux/selector/cartSlector";
import {useState} from "react";
import {getTokenUserFromStore, selectCart} from "@redux";
import {NavigationUtils, SCREEN_ROUTE} from "@navigation";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const infoCart:any=useSelector(getInfoCart)
    const token = useSelector(getTokenUserFromStore);
    const [isVisible,setIsVisible]=useState(false)
    const [itemCartDelete,setItemCartDelete]=useState<any>()
    const [indexCartDelete,setIndexCartDelete]=useState<any>()
    const onDeleteCart =()=>{
        console.log('itemCartDelete:',itemCartDelete)
    }
    const onSelectCart =(value:any,index:number)=>{
        let newList=infoCart.list
        console.log('newList[index]:',newList[index])
        newList[index]={
            ...newList[index],
            select:!newList[index].select
        }
        console.log('newList:',newList[index],!newList[index].select)
        dispatch(selectCart(infoCart.list))
    }
    const checkoutCart=()=>{
            NavigationUtils.navigate(SCREEN_ROUTE.CHECKOUT,{items:infoCart})
    }
    return{
        nav,
        infoCart,
        onDeleteCart,isVisible,setIsVisible,
        setItemCartDelete,onSelectCart,
        indexCartDelete,setIndexCartDelete,
        checkoutCart,token

    }
}
