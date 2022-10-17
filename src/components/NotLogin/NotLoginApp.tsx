import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontWithBold, IconUserName, Spacing} from "@assets";
import {useSelector} from "react-redux";
import {navigate, SCREEN_ROUTE} from "@navigation";
import {Colors, FontSize} from "@theme";
export interface NotLoginAppType {

}
export const NotLoginApp =(props:NotLoginAppType)=>{
    const {}=props
    return(
        <View style={styles.container}>
           {/*<View style={{alignItems:'center',alignSelf:'center',backgroundColor:'red'}}>*/}
               <IconUserName/>
               <Text style={styles.warnTxt}>Looks like you haven’t signed in yet</Text>
               <TouchableOpacity style={styles.btnSignIn} onPress={() => navigate(SCREEN_ROUTE.LOGIN)}>
                   <Text style={styles.signinBtn}>Sign in</Text>
               </TouchableOpacity>
               {/*<TouchableOpacity style={styles.btnNotRegistered}>*/}
                   <Text style={styles.txtNotRegistered}>Not registered yet?</Text>
               {/*</TouchableOpacity>*/}
                <TouchableOpacity onPress={() => navigate(SCREEN_ROUTE.SIGNUP)}>
                    <Text style={styles.txtCreateAccount}>Create an Account</Text></TouchableOpacity>
           {/*</View>*/}
                   </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(242, 242, 242, 1)",
        alignItems: "center",
        justifyContent:'center'
    },
    warnTxt: {
        width:Spacing.width240,
        textAlign:'center',
        marginTop: Spacing.height20,
        fontSize:FontSize.Font21,
        ...FontWithBold.Bold_600,
        color:Colors.colorMain
    },
    btnSignIn:{
        marginTop: Spacing.height50,
        borderColor:Colors.dark,
        borderWidth:1,
        width:Spacing.width200,
        height:52,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:Spacing.height8
    },
    signinBtn: {
        fontSize:FontSize.Font18,
        ...FontWithBold.Bold_500,
    },
    txtNotRegistered:{
        fontSize:FontSize.Font15,
        ...FontWithBold.Bold_400,
        color:'#ACACAC',
        marginTop:Spacing.height20
    },
    btnNotRegistered:{
        marginTop:Spacing.height20
    },
    txtCreateAccount:{
        fontSize:FontSize.Font16,
        ...FontWithBold.Bold_600,
        color:Colors.dark
    },
})
