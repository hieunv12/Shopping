import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {useTranslation} from "react-i18next";
import {styles} from "./styles";
import {renderImage} from "../../../../utils/ImageUtils";
import {renderPrice} from "../../../../utils/PriceUtils";
import {IconSold} from "@assets";
import {Spacing} from "@theme";
import {NavigationUtils, SCREEN_ROUTE} from "@navigation";
type FormRowType={
    name:string,
    data:any,
    callback:()=>void
}
export const FormRow =(props:FormRowType)=>{

    const {data,name,callback}=props
    const {t} = useTranslation();
    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>{
                NavigationUtils.navigate(SCREEN_ROUTE.PRODUCT_DETAIL,{id:item?.id})
            }} style={styles.viewProduct}>
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
        <View style={{...styles.container,marginTop:Spacing.height16}}>
            <View style={styles.viewRow}>
                <Text style={styles.title}>{name}</Text>
               <TouchableOpacity onPress={callback}>
                   <Text style={styles.des}>{t('viewAll')}</Text>
               </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal={true}/>
        </View>
    )
}
