import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {AppText} from "@components";
import { t } from "i18next";
const DataAddress={
    name:"Nguyen Van Hieu",
    phone:"0192381231",
    address:" Cau giay , Ha Noi",
}
type InfoAddressType={
    address:any
}
export const InfoAddress =(props:InfoAddressType)=>{
    const {address}=props;


    return(
        <View style={styles.container}>
            <AppText style={styles.txtTitle}>{t("infoAddress")}</AppText>

        </View>
    )
}
