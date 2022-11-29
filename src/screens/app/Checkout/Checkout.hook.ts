import {useDispatch, useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {getProfileUserFromStore} from "@redux";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const param:any=useRoute()
    const infoUserName=useSelector(getProfileUserFromStore)
    const {params}=param
    console.log('infoUserName:',infoUserName)
    return{
        nav,
        params,
        infoUserName
    }
}
