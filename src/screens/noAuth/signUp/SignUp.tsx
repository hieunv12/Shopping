import React from "react";
import {useModel} from "./SignUp.hook";
import {SafeAreaView, Text, View} from "react-native";
import {styles} from "./styles";
import {HeaderAuth} from "../../../components/HeaderAuth";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {AppButton, AppInput, AppText} from "@components";
import {Colors, Spacing} from "@theme";
export const SignUp =(props:any)=>{
    const {nav,t,refPassword,refEmail,refUsername,refRePassword,values, errors, touched, setFieldValue,handleSubmit}=useModel(props)

    return(
        <SafeAreaView style={styles.container}>
            <HeaderAuth/>
            <KeyboardAwareScrollView
                contentContainerStyle={{flex: 1,alignItems:'center',justifyContent:'center', marginHorizontal:Spacing.width16}}>
                <View style={styles.logoApp}/>
                <AppText variant={"title3"} fontWeight="600" marginBottom={"l"}>{t('titleLogin')} <Text style={styles.txtApp}>MyApp</Text></AppText>

                <AppInput
                    value={values.username}
                    onChangeText={(value) => setFieldValue('email', value)}
                    placeholder={t('plpUserName')}
                    label={t('email')}
                    ref={refEmail}
                    returnKeyType={'next'}
                    onSubmitEditing={()=>{refPassword.current.focus()}}
                    keyboardType="email-address"
                    error={errors.email}
                    placeholderTextColor={Colors.border}
                    touched={touched.email}
                />

                <AppInput
                    value={values.full_name}
                    onChangeText={(value) => setFieldValue('email', value)}
                    placeholder={t('plpUserName')}
                    label={t('full_name')}
                    ref={refEmail}
                    returnKeyType={'next'}
                    onSubmitEditing={()=>{refPassword.current.focus()}}
                    // keyboardType="email-address"
                    error={errors.full_name}
                    placeholderTextColor={Colors.border}
                    touched={touched.full_name}
                />
                <AppInput
                    value={values.password}
                    onChangeText={(value) => setFieldValue('password', value)}
                    placeholder={t('plpPassword')}
                    label={t('title_password')}
                    marginTop={"xs"}
                    ref={refPassword}
                    secureTextEntry
                    placeholderTextColor={Colors.border}
                    error={errors.password}
                    returnKeyType={'done'}
                    touched={touched.password}
                />
                <AppInput
                    value={values.re_password}
                    onChangeText={(value) => setFieldValue('password', value)}
                    placeholder={t('plpPassword')}
                    label={t('title_password')}
                    marginTop={"xs"}
                    ref={refPassword}
                    secureTextEntry
                    placeholderTextColor={Colors.border}
                    error={errors.re_password}
                    returnKeyType={'done'}
                    touched={touched.re_password}
                />
                <View style={{...styles.viewRow,marginTop:Spacing.height20}}>
                    <AppButton
                        label={t('can')}
                        onPress={() => {
                            nav.goBack()
                        }}
                        style={styles.btnCan}
                    />
                    <AppButton
                        label={t('sigUp')}
                        onPress={() => {
                            handleSubmit()
                            // dispatch(setAccountToken('adsadajsd12281'))
                        }}
                        style={styles.btnSigUp}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}