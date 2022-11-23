import React from "react";
import {useModel} from "./FormProduct.hook";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {styles} from "./styles";
import {AppImage, AppText, HeaderScreen} from "@components";
import {NavigationUtils, SCREEN_ROUTE} from "@navigation";
import {renderImage} from "../../../utils/ImageUtils";
import {renderPrice} from "../../../utils/PriceUtils";
import {IconSold} from "@assets";
import {Spacing} from "@theme";
import RBSheet from "react-native-raw-bottom-sheet";
import { t } from "i18next";
import {FilterProduct} from "./Block/FilterProduct";
export const FormProduct =(props:any)=>{
    const {params,data,onFilter,refBottom}=useModel(props)
    // @ts-ignore
    const renderItem =({item,index})=>{
        return (
            <TouchableOpacity onPress={()=>{
                NavigationUtils.navigate(SCREEN_ROUTE.PRODUCT_DETAIL,{id:item?.id})
            }} style={{...styles.viewProduct,marginLeft:index%2!==0?Spacing.width20:0}}>
                <Image style={styles.img_product} resizeMode={"contain"} source={renderImage(item.imageUrl)}/>
                <Text style={styles.txt_product} numberOfLines={2}>{item?.name}</Text>

                <View style={styles.viewPrice}>
                    <Text style={styles.txt_price_product}>{renderPrice(item?.price)}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <IconSold/>
                        <Text style={styles.txt_sold_product}>({item?.totalSold})</Text>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <HeaderScreen
                name={params?.name?params?.name:''}
                isFilter={true}
                onFilter={()=>{refBottom?.current?.open()}}
            />
           <FlatList
               data={data}
               ListHeaderComponent={()=>{
                   return(
                       <AppImage uri={params?.item?.imageUrl} style={styles.img} />
                   )
               }}
               contentContainerStyle={{
                   marginHorizontal:Spacing.width16,

               }}
               renderItem={renderItem}
               numColumns={2}
               keyExtractor={(item,index)=>`list_product_${index.toString()}`}
           />
            <RBSheet
                ref={refBottom}
                height={400}
                animationType={"fade"}
                openDuration={150}
                customStyles={{
                    container: {
                        // justifyContent: "center",
                        alignItems: "center",
                        paddingVertical:Spacing.height16
                    }
                }}
            >
           <FilterProduct/>

            </RBSheet>
        </View>
    )
}
