import React from "react";
import {useModel} from "./ProductDetail.hook";
import {View} from "react-native";
import {styles} from "./styles";
import {AppSlide, HeaderScreen} from "@components";
import {useRoute} from "@react-navigation/native";
import {BottomProduct} from "./block/BottomProduct";
export const ProductDetail =(props:any)=>{
    const {data}=useModel(props)

    return(
        <View style={styles.container}>
            <HeaderScreen/>
                <AppSlide images={data?.imageUrl}/>
            <BottomProduct/>
        </View>
    )
}
