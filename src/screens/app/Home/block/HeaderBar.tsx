import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors, FontSize, Spacing} from "@theme";
import {SearchIcon} from "@assets";
import {useTranslation} from "react-i18next";

export const HeaderBar =()=>{
    const {t} = useTranslation();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.viewSearch}>
                <Text numberOfLines={1} style={styles.txtSearch}>{t('txtSearch')}</Text>
                <SearchIcon/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNotification}>

            </TouchableOpacity>
        </View>
    )
}
export const styles=StyleSheet.create({
    container:{
        paddingVertical:Spacing.height8,
        paddingHorizontal:Spacing.width16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewSearch:{
        width:'80%',
        height:Spacing.height50,
       backgroundColor:'#F6F9F7',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:Spacing.width8,
        borderRadius:Spacing.height8
    },
    txtSearch:{
      fontSize:FontSize.Font14,
      fontFamily:'Poppins-Light',
        color:Colors.placeholder,
        maxWidth:'90%'
    },
    btnNotification:{
        width:'15%',
        height:Spacing.height50,
        backgroundColor:'green',
    }
})
