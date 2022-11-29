import {StyleSheet} from "react-native";
import {Colors, FontSize, Shadow, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:Spacing.width16,
        marginTop:Spacing.height16,
        ...Shadow
    },
    txtTitle:{
        fontSize:FontSize.Font16,
        color:Colors.black,
    },
    txtCountPrice:{
        fontSize:FontSize.Font12,
        color:Colors.placeholder,
    }
})
