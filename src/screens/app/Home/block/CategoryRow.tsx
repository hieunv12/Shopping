import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors, FontSize, FontWithBold_Barlow, Shadow} from "@theme";
import {useTranslation} from "react-i18next";
import {Spacing} from "@assets";
import {styles} from "./styles";
type CategoryRowType={
    data:any
}
export const CategoryRow =(props:CategoryRowType)=>{
    const {data}=props
    const {t} = useTranslation();
    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>{}} style={styles.viewCategory}>
                <View style={styles.viewImg}>
                    <Image style={styles.img} resizeMode={"contain"} source={{uri:item?.imageUrl}}/>
                </View>
                <Text style={styles.txt} numberOfLines={1}>{item?.name}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.viewRow}>
                <Text style={styles.title}>{t('category')}</Text>
                <Text style={styles.des}>{t('viewAll')}</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal={true}/>
        </View>
    )
}
