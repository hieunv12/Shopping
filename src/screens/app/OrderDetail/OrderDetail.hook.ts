import {useDispatch} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {cancelOrder} from "@services";
import {goBack} from "@navigation";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const param:any=useRoute()
    const {params}=param
    console.log({params})
    const onCancelOrder=()=>{

        cancelOrder(params?.item?.id,()=>{
goBack()
        },()=>{

        }).then()
    }
    return{
        nav,
        params,onCancelOrder
    }
}
