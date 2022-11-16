import React, {Component, useRef, useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    Dimensions, useWindowDimensions, Image, FlatList, TouchableOpacity
} from "react-native";
import {Colors, Spacing} from "@theme";
import {Device} from "../../assets/device";


const window = Dimensions.get("window");
type AppSlideType={
    images:any
}
export const AppSlide = (props:AppSlideType) => {
    const {images}=props
    const scrollX = useRef(new Animated.Value(0)).current;
    const [numImage,setNumImage]=useState(0)
    const refFlatList=useRef<any>()
    const {width: windowWidth} = useWindowDimensions();
    const onViewCallBack = React.useCallback((viewableItems)=> {
        const num:number=viewableItems?.viewableItems[0]?.index
        setNumImage(num)
    }, []) // any dependencies that require the function to be "redeclared"
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <FlatList
                    data={images?images:[]}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled
                    ref={refFlatList}
                    initialScrollIndex={numImage}
                    onScrollToIndexFailed={info => {
                        const wait = new Promise(resolve => setTimeout(resolve, 0));
                        wait.then(() => {
                            refFlatList.current?.scrollToIndex({
                                index: info.index,
                                animated: true,
                            });
                        });
                    }}
                    renderItem={({item,index})=>{
                    return(
                        <View
                            style={{width: windowWidth, height:  Device.height/2}}

                        >
                            <Image resizeMode={'contain'} source={{uri: item}} style={styles.card}/>

                        </View>
                    )
                }}
                    onViewableItemsChanged={onViewCallBack}
                    viewabilityConfig={viewConfigRef.current}
                    scrollEventThrottle={1}
                />
                <View style={styles.indicatorContainer}>
                    {images?.map((image:string, imageIndex:number) => {
                        const width = scrollX.interpolate({
                            inputRange: [0,1],
                            outputRange: [1,0],
                            extrapolate: "clamp"
                        });
                        console.log("width:",width)
                        return (
                            <TouchableOpacity onPress={()=>{
                                setTimeout(() => {
                                    setNumImage(imageIndex)
                                    refFlatList?.current?.scrollToIndex({
                                        animated: true,
                                        index: imageIndex,
                                    });
                                }, 0);

                            }}>
                                <Animated.Image  key={imageIndex}
                                                 source={{uri:image}}
                                                 style={{width:Spacing.width50,height:Spacing.height50,marginLeft:Spacing.width8,borderWidth:imageIndex===numImage?2:0,borderColor:Colors.colorMain}}/>
                            </TouchableOpacity>
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
