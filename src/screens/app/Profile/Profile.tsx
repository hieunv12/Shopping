import React from "react";
import {SafeAreaView, TouchableOpacity, View} from "react-native";
import {Field, FieldArray, useFormik} from "formik";
import {setAccountToken} from "@redux";
import {AppButton, HeaderScreen, NotLoginApp} from "@components";
import {styles} from "./styles";
import {useModel} from "./Profile.hook";
import {t} from "i18next";
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
    // if(token){
    //     return(
    //         <SafeAreaView style={styles.container}>
    //             <View style={styles.header}></View>
    //         </SafeAreaView>
    //     )
    // }else {
    //     return <NotLoginApp/>
    // }
    const renderView=()=>{
        if(token){
            return(
                <View></View>
            )
        }else {
            return <NotLoginApp/>
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderScreen name={t('profile')} isIconClose={false}/>
            {renderView()}
        </SafeAreaView>
    )
}
