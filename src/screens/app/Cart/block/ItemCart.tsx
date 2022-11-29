import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {AppImage, AppQuantity, AppText} from "@components";
import {renderPrice} from "../../../../utils/PriceUtils";
import {IconClose} from "@assets";
type ItemCartType={
    item:any,
    index:number,
    onSelect:(value:any)=>void,
    onClose?:()=>void
}
export const ItemCart=(props:ItemCartType)=>{
    const {item,index,onSelect,onClose}=props


    return(
        <TouchableOpacity style={styles.container} onPress={()=>{onSelect(item)}}>
            {/*<View style={item?.select?styles.checkboxSelect:styles.checkbox}/>*/}
            <View style={styles.containerView}>
                <AppImage uri={item?.imageUrl[0]} style={styles.image} resizeMode={"contain"} />
                <View style={{width:'68%',marginLeft:8}}>
                    <View style={{...styles.containerView,justifyContent:'space-between'}}>
                        <AppText style={styles.txt_name}>{item?.name}</AppText>
                        <TouchableOpacity style={styles.btnClose} onPress={onClose}>
                            <IconClose/>
                        </TouchableOpacity>
                    </View>
                    <AppText style={styles.txt_price}>{renderPrice(item?.price)}</AppText>
                    <AppText style={styles.txt_size}>Den/M</AppText>
                    <View style={{...styles.containerView,justifyContent:'space-between'}}>
                        <AppQuantity
                            style={styles.containerQuantity}
                        />
                        <AppText>{renderPrice(item?.price)}</AppText>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}
