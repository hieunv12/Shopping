import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {setAccountToken} from "@redux";
import {useTranslation} from "react-i18next";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const [step,setStep]=useState(1)
    const {t} = useTranslation();
    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .email()
            .required(t("validateEmail")),
    });
    const {values, errors, touched, setFieldValue,handleSubmit} = useFormik({
        initialValues: {
            email: '',
            otp:"",

        },
        onSubmit: (values) => {
            if(step===1){
                onForgot(values?.email)
            }else if(step===2){
                checkOtp(values?.otp)
            }else {

            }
        },
        validationSchema:SignupSchema
    });
    const onForgot=(value:any)=>{
        console.log(value)
        let param={
            email:value
        }
    }
    const checkOtp=(otp:string)=>{
        let param={
            otp:otp
        }
    }
    const ChangePassword=(passwordOld:string,passwordNew:string,passwordOldReNew:string)=>{
        let param={
            password:passwordNew
        }
    }
    return{
        nav,
        step,
        onForgot,
        values, errors, touched, setFieldValue,handleSubmit,
        SignupSchema
    }
}
