import React from "react";
import {useModel} from "./AboutUs.hook";
import {View} from "react-native";
import {styles} from "../ChangePassword/styles";
import {HeaderScreen} from "@components";
import {t} from "i18next";
export const AboutUs =(props:any)=>{
    const {}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('aboutUS')}/>
        </View>
    )
}
