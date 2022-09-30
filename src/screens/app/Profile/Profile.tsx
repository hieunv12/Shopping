import React from "react";
import {TouchableOpacity, View} from "react-native";
import {Field, FieldArray, useFormik} from "formik";
import {setAccountToken} from "@redux";
import {AppButton} from "@components";
const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};
export const Profile =()=>{
    const {values, errors, touched, setFieldValue,handleSubmit,setFormikState} = useFormik({
        initialValues:initialValues,
        onSubmit: (values) => {

        },
        // validationSchema:SignupSchema
    });
    console.log(values)
    return(
        <View>
        </View>
    )
}
