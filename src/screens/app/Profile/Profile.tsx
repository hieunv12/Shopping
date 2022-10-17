import React from "react";
import {SafeAreaView, TouchableOpacity, View} from "react-native";
import {Field, FieldArray, useFormik} from "formik";
import {setAccountToken} from "@redux";
import {AppButton, NotLoginApp} from "@components";
import {styles} from "./styles";
import {useModel} from "./Profile.hook";
const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};
export const Profile =(props:any)=>{

    const {token}=useModel(props)
    if(token){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}></View>
            </SafeAreaView>
        )
    }else {
        return <NotLoginApp/>
    }
}
