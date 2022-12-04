import React from "react";
import {useModel} from "./Forgot.hook";
import {View} from "react-native";
import {styles} from "./styles";
import {AppButton, AppInput, AppText, HeaderScreen} from "@components";
import { t } from "i18next";
import {Colors} from "@theme";
export const Forgot =(props:any)=>{
    const {step,values, errors, touched, setFieldValue,handleSubmit,
        SignupSchema}=useModel(props)

    console.log('errors:',errors)
    const renderView=()=>{
        if(step===1){
            return(
                <View style={styles.form}>
                    <AppText style={styles.txt}>{t("desForgot")}</AppText>
                    <AppInput
                        value={values.email}
                        onChangeText={(value) => setFieldValue('email', value)}
                        placeholder={t('plpUserName')}
                        label={t('email')}
                        keyboardType="email-address"
                        placeholderTextColor={Colors.border}
                        error={errors.email}
                        returnKeyType={'done'}
                        touched={touched.email}
                    />
                    <AppButton
                        label={t('verify').toUpperCase()}
                        onPress={() => {
                            handleSubmit()
                        }}
                        style={styles.btnForgot}
                    />
                </View>
            )
        }else {
            return (
                <View style={styles.form}>
                    <AppText style={styles.txt}>{t("desForgot")}</AppText>
                    <AppInput
                        value={values.otp}
                        onChangeText={(value) => setFieldValue('otp', value)}
                        placeholder={t('plpUserName')}
                        label={t('email')}
                        keyboardType="email-address"
                        placeholderTextColor={Colors.border}
                        error={errors.otp}
                        returnKeyType={'done'}
                        touched={touched.otp}
                    />
                    <AppButton
                        label={t('verify').toUpperCase()}
                        onPress={() => {
                            handleSubmit()
                        }}
                        style={styles.btnForgot}
                    />
                </View>
            )
        }
    }
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('forgot')}/>
            {renderView()}
        </View>
    )
}
