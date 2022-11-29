import React from "react";
import {useModel} from "./FormProduct.hook";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {styles} from "./styles";
import {AppImage, AppText, HeaderScreen, SelectDrop} from "@components";
import {NavigationUtils, SCREEN_ROUTE} from "@navigation";
import {renderImage} from "../../../utils/ImageUtils";
import {renderPrice} from "../../../utils/PriceUtils";
import {IconNoProduct, IconSold} from "@assets";
import {Colors, Spacing} from "@theme";
import RBSheet from "react-native-raw-bottom-sheet";
import { t } from "i18next";
import {FilterProduct} from "./Block/FilterProduct";
import {DataFilter} from "@utils";
export const FormProduct =(props:any)=>{
    const {params,data,onFilter,textFilter,refBottom,filter,renderTextFilter}=useModel(props)
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
                // isFilter={true}
                onFilter={()=>{refBottom?.current?.open()}}
            />

           <FlatList
               data={data}
               ListHeaderComponent={()=>{
                   return(
                   <View>
                       <AppImage uri={params?.item?.imageUrl} style={styles.img} />

                       <SelectDrop
                           data={DataFilter}
                           width={'40%'}
                           styleContainer={{alignSelf:'flex-end',marginVertical:Spacing.height16,}}
                           style={{borderColor:Colors.border,borderWidth:1,backgroundColor:Colors.white}}
                           keyName={'name'}
                           onSelect={(item:any) => {
                               // setSizeSelect(item)
                           }}
                           placeholder={t("selectFilter")}
                       />
                   </View>
                   )
               }}
               contentContainerStyle={{
                   marginHorizontal:Spacing.width16,

               }}
               renderItem={renderItem}
               ListEmptyComponent={()=>{
                   return(
                       <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
                           <IconNoProduct/>
                           <AppText>{t('notProduct')}</AppText>
                           {/*<Image source={NoProduct} resizeMode={'center'} style={{width:Spacing.width100,height:Spacing.width100,backgroundColor:'red'}}/>*/}
                       </View>
                   )
               }}
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
                        paddingBottom:Spacing.height16
                    }
                }}
            >
           <FilterProduct
               onFilter={(value)=>onFilter(value)}
               onClose={()=>refBottom?.current?.close()}/>

            </RBSheet>
        </View>
    )
}
