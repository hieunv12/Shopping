import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors, FontSize, FontWithBold_Barlow, Spacing} from "@theme";
import {useTranslation} from "react-i18next";
import {IconCart} from "@assets";

export const BottomProduct =()=>{
    const {t} = useTranslation();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnBuy}>
                    <Text style={styles.txtBuy}>{t('buy')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCart}>
                <Text style={styles.txtBuy}><IconCart iconFillColor={Colors.white}/></Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        position:'absolute',
        bottom:0,
        height:Spacing.height62,
        paddingHorizontal:Spacing.width16,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Colors.white,
    },
    btnBuy:{
        backgroundColor:Colors.colorMain,
        height:Spacing.height50,
        width:'75%',
        borderRadius:Spacing.height8,
        alignItems:'center',
        justifyContent:'center'
    },
    btnCart:{
        backgroundColor:Colors.colorMain2,
        height:Spacing.height50,
        width:'20%',
        borderRadius:Spacing.height8,
        alignItems:'center',
        justifyContent:'center'


    },
    txtBuy:{
      ...FontWithBold_Barlow.Bold_Barlow_700,
        fontSize:FontSize.Font16,
        color:Colors.white
    }
})
