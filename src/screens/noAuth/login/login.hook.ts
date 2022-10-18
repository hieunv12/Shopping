import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import * as Yup from "yup";
import {useFormik} from "formik";
import {setAccountToken} from "@redux";
import {useRef} from "react";
import {useTranslation} from "react-i18next";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const nav = useNavigation();
    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .email()
            .required('Nhận tên'),
        password: Yup.string()
            .email('Invalid email')
            .required('Required'),
    });
    const {values, errors, touched, setFieldValue,handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            dispatch(setAccountToken('adsadajsd12281'))
        },
        // validationSchema:SignupSchema
    });
    const refEmail=useRef<any>(null)
    const refPassword=useRef<any>(null)
    return{
        nav,
        t,
        refPassword,
        refEmail,
        values, errors, touched, setFieldValue,handleSubmit,SignupSchema
    }
}
