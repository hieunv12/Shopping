import React, {Component, useRef} from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    Dimensions, useWindowDimensions, Image
} from "react-native";
import {Spacing} from "@theme";
import {Device} from "../../assets/device";


const window = Dimensions.get("window");
type AppSlideType={
    images:any
}
export const AppSlide = (props:AppSlideType) => {
    const {images}=props
    const scrollX = useRef();

    const {width: windowWidth} = useWindowDimensions();
    console.log(scrollX)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                //     onScroll={(event)=>{
                //         console.log('data:',event)
                //     }
                // }
                    scrollEventThrottle={1}
                >
                    {images.map((image:string, imageIndex:number) => {
                        return (
                            <View
                                key={`banner_product_${imageIndex}`}
                                style={{width: windowWidth, height:  Device.height/2}}

                            >
                                <ImageBackground resizeMode={'contain'} source={{uri: image}} style={styles.card} >
                                </ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {images.map((image:string, imageIndex:number) => {
                        return (
                            <Image  key={imageIndex} source={{uri:image}} style={{width:Spacing.width50,height:Spacing.height50,marginLeft:Spacing.width8}}/>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        height:  Device.height/2,
    },
    scrollContainer: {
        height: Device.height/2,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:'green'
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        backgroundColor: "rgba(0,0,0, 0.7)",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5
    },
    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        top: Device.height/2,
        position:'absolute',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});
