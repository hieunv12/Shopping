import React, {useRef} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {AppSlide} from "@components";
import Carousel from 'react-native-snap-carousel';
import {Spacing} from "@theme";
import {Device} from "../../../../assets/device";
import {array} from "yup";

const Data=[
    {
    url:'https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg'
},
    {
        url:'http://maytinhgiarehanoi.com/wp-content/uploads/2018/11/New-Refurbished-Banner.jpg'
    },
    {
        url:'https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg'
    },
    {
        url:'http://maytinhgiarehanoi.com/wp-content/uploads/2018/11/New-Refurbished-Banner.jpg'
    }
]
const sliderWidth=Device.width-Spacing.width36
const itemWidth=Spacing.width303
type BannerType={
    data:any
}
export const BannerRow=(props:BannerType)=>{
    const _carousel=useRef<any>(null)
    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image style={{width:itemWidth,borderRadius:Spacing.width8,height:Spacing.height180}} resizeMode={'contain'} source={{uri:item.url}}/>
            </View>
        );
    }
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',marginHorizontal:Spacing.width16,height:Spacing.height200}}>
            <Carousel
                ref={_carousel}
                data={Data}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                layout={'default'}

                // autoplay={true}
                // autoplayInterval={3000}
            />
        </View>
    )
}
export const styles=StyleSheet.create({
    slide:{
    },
    title:{

    }
})
