import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BackIcon} from "@assets";
import {Colors, FontSize, FontWithBold_Barlow, Shadow, Spacing} from "@theme";
import {NavigationUtils} from "@navigation";
type HeaderScreenType={
    name?:string,

}
export const HeaderScreen=(props:HeaderScreenType)=>{
const {name}=props
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconBack} onPress={()=>{
                NavigationUtils.goBack()
            }}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.txt}>{name}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:Spacing.height60,
        width:'100%',
        backgroundColor:Colors.white,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.08)'
    },
    iconBack:{
        position:"absolute",
        paddingLeft:Spacing.width16,
        left:0,
        width:50,
        height:Spacing.height50,
        alignItems:'flex-start',
        justifyContent:'center',
    },
    txt:{
        fontSize:FontSize.Font16,
        color:Colors.black,
        ...FontWithBold_Barlow.Bold_Barlow_700,
    }
})
