import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getTokenUserFromStore} from "@redux";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const token = useSelector(getTokenUserFromStore);
    const nav = useNavigation();

    return{
        nav,
        token
    }
}