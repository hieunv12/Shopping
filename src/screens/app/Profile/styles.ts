import {Platform, StatusBar, StyleSheet} from "react-native";
import {Colors} from "@theme";
import {Spacing} from "@assets";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header:{
        backgroundColor:'red',
        // flex:1,
        height:Spacing.height40
    }
})
