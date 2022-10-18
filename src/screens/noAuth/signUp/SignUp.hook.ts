import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import {useRef} from "react";
import {useFormik} from "formik";
import {setAccountToken} from "@redux";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {t} = useTranslation();
    const refEmail=useRef<any>(null)
    const refPassword=useRef<any>(null)
    const refUsername=useRef<any>(null)
    const refRePassword=useRef<any>(null)
    const {values, errors, touched, setFieldValue,handleSubmit} = useFormik({
        initialValues: {
            email: '',
            username:'',
            re_password:'',
            full_name:'',
            password: '',
        },
        onSubmit: (values) => {
            dispatch(setAccountToken('adsadajsd12281'))
        },
        // validationSchema:SignupSchema
    });
    return{
        nav,t,refPassword,refEmail,refUsername,refRePassword,values, errors, touched, setFieldValue,handleSubmit
    }
}
