import React from "react";
import {useModel} from "./Checkout.hook";
import {ScrollView, View} from "react-native";
import {styles} from "./styles";
import {AppButton, HeaderScreen} from "@components";
import { t } from "i18next";
import {InfoAddress} from "./block/InfoAddress";
import {InfoCart} from "./block/InfoCart";
import {InfoPayment} from "./block/InfoPayment";
export const Checkout =(props:any)=>{
    const {params,onCheckout,addressDef,onEditAddress,isPayment,setIsPayment}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t("checkout")}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InfoAddress
                    address={addressDef}
                    onEdit={onEditAddress}/>
                <InfoCart product={params?.items}/>
                <InfoPayment
                    status={isPayment}
                    setStatus={(value:boolean)=>{setIsPayment(value)}}
                />
                <AppButton label={t("checkout").toUpperCase()} style={styles.btnCheckout} onPress={onCheckout}/>
            </ScrollView>
        </View>
    )
}
