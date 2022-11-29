import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {AppText} from "@components";
import {t} from "i18next";
type InfoCartType={
    product:any
}
export const InfoCart =(props:InfoCartType)=>{
    const {product}=props;
    const {list,count,total}=product

    // @ts-ignore
    const renderItem =({item,index})=>{
        return(
            <TouchableOpacity>

            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <AppText style={styles.txtTitle}>{t("infoCart")}</AppText>
            <AppText style={styles.txtCountPrice}>({count+" "+t("product")})</AppText>
            <FlatList data={list} renderItem={renderItem} showsHorizontalScrollIndicator={true} horizontal={true}/>
        </View>
    )
}
