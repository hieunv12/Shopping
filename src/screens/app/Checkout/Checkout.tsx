import React from "react";
import {useModel} from "./Checkout.hook";
import {ScrollView, View} from "react-native";
import {styles} from "./styles";
import {HeaderScreen} from "@components";
import { t } from "i18next";
import {InfoAddress} from "./block/InfoAddress";
export const Checkout =(props:any)=>{
    const {params,infoUserName}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t("checkout")}/>
            <ScrollView>
                <InfoAddress address={infoUserName?.address}/>
            </ScrollView>
        </View>
    )
}
