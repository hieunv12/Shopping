import React, {Component, useRef} from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    Dimensions, useWindowDimensions
} from "react-native";


const window = Dimensions.get("window");
type AppSlideType={
    images:any
}
export const AppSlide = (props:AppSlideType) => {
    const {images}=props
    const scrollX = useRef(new Animated.Value(0)).current;

    const {width: windowWidth} = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }
                    ])}
                    scrollEventThrottle={1}
                >
                    {images.map((image:{url:string}, imageIndex:number) => {
                        return (
                            <View
                                style={{width: windowWidth, height: 200}}
                                key={imageIndex}
                            >
                                <ImageBackground resizeMode={'contain'} source={{uri: image?.url}} style={styles.card} >
                                    {/*<View style={styles.textContainer}>*/}
                                    {/*    <Text style={styles.infoText}>*/}
                                    {/*        {"Image - " + imageIndex}*/}
                                    {/*    </Text>*/}
                                    {/*</View>*/}
                                </ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {images.map((image:string, imageIndex:number) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                        });
                        return (
                            <Animated.View
                                key={imageIndex}
                                style={[styles.normalDot, {width}]}
                            />
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
        justifyContent: "center",

    },
    scrollContainer: {
        height: 200,
        alignItems: "center",
        justifyContent: "center",

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
        top:200,
        position:'absolute',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});
