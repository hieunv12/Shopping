import {useDispatch, useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import {getAddressAccount, setAddressSelect, setAddressUserProfile} from "@redux";
import {useEffect, useRef, useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {addAddress, getAllCity, getAllDistrict, getAllWard} from "@services";
import {goBack} from "@navigation";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {t} = useTranslation();
    const data=useSelector(getAddressAccount)
    const [loading,setLoading]=useState<boolean>(false)
    const {params}:any=useRoute()
    const refName=useRef<any>(null)
    const [city,setCity]=useState<any>([])
    const [districts,setDistrict]=useState<any>([])
    const [wards,setWards]=useState<any>([])

    useEffect(()=>{
        callApiCity()
        // let checks=data.filter(elm=>elm.typeAddress===0).length>0
        // console.log(checks)
    },[])
    const callApiCity=()=>{
        // setCity([{"id": 63,
        //     "name": "Hà Nội"}])
        // setDistrict([{"id": 714,
        //     "name": "Quận Hà Đông"}])
        // setWards([{
        //     "id": 22340,
        //     "name": "Phường Phú Lương"
        // }])
        getAllCity((res)=>{
            console.log({res})
            setCity(res)
        }).then()
    }
    const callApiDistricts=(id:string)=>{
        getAllDistrict(id,(res)=>{
            setCity(res)
        }).finally(()=>{
            setCity([])
        })
    }
    const callApiWards=(id:string)=>{
        getAllWard(id,(res)=>{
            setCity(res)
        }).finally(()=>{
            setCity([])
        })
    }
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        phone: Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        address: Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        cityName:Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        districtName:Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        wardName:Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
    });
    const {values, errors, touched, setFieldValue,handleSubmit} = useFormik({
        initialValues: {
            name: '',
            phone: '',
            cityName:'',
            cityId:'',
            districtName:"",
            districtId:"",
            wardName:"",
            wardId:"",
            address:"",
            typeAddress:false
        },
        onSubmit: (values) => {
            setLoading(true)
            let param= {
                "name": values.name,
                "phone": values.phone,
                "typeAddress": values.typeAddress ? 0 : 1,
                "street": values.address,
                "detailAddress": {
                    "city":
                        {
                            "id": values.cityId,
                            "name": values.cityName
                        },
                    "district":
                        {
                            "id": values.districtId,
                            "name": values.districtName
                        },
                    "ward":
                        {
                            "id": values?.wardId,
                            "name": values?.wardName
                        }
                }
            }
            addAddress(param,(res)=>{
                console.log(res,{data})
                let newData=data
                console.log('newData:',newData.push(res))
                let listAddress=newData.push(res)
                let addressSelect=listAddress?.filter((elm:any)=>elm.typeAddress===0)[0]
                dispatch(setAddressSelect(addressSelect))
                dispatch(setAddressUserProfile(newData.push(res)))
                // goBack()
                // setLoading(false)
            }).catch(()=>{
                setLoading(false)
            })
            console.log({param})
        },
        validationSchema:SignupSchema
    });


    return{
        nav,
        data,loading,
        values, errors, touched, setFieldValue,handleSubmit,
        refName,
        params,city,districts,wards
    }
}
