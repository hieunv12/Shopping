import {StyleSheet} from "react-native";
import {Colors, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    btnCheckout:{
        marginTop:Spacing.width16,
        marginHorizontal:Spacing.width16,
        backgroundColor:Colors.colorMain2,
        borderRadius:8
    }
})
