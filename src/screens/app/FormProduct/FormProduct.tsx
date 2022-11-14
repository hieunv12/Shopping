import React from "react";
import {useModel} from "./FormProduct.hook";
import {View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {styles} from "./styles";
import {HeaderScreen} from "@components";
export const FormProduct =(props:any)=>{
    const {}=useModel(props)
    const {params}=useRoute()
    console.log(params)
    return(
        <View style={styles.container}>
            <HeaderScreen name={params?.name?params?.name:''}/>
        </View>
    )
}
