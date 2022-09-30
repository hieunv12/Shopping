import {AppButton, AppInput, AppText} from '@components';
import {Box} from '@theme';
import {Formik, useFormik} from 'formik';
import React, {useRef} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from "react-redux";
import {setAccountToken} from "@redux";
import * as Yup from "yup";
export const LoginScreen = () => {
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .email()
        .required('Nhận tên'),
    password: Yup.string()
        .email('Invalid email')
        .required('Required'),
  });
  const {values, errors, touched, setFieldValue,handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(setAccountToken('adsadajsd12281'))
    },
   // validationSchema:SignupSchema
  });
  const refEmail=useRef<any>(null)
  const refPassword=useRef<any>(null)
  console.log('refPassword:',refPassword.current)

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1}}
    >
      {/*<Formik initialValues={{ email: '',*/}
      {/*  password: ''}} onSubmit={}>*/}
        <Box alignItems={"center"} justifyContent="center" flex={1} paddingHorizontal={"l"}>
          <AppText variant={"title3"} fontWeight="600" marginBottom={"l"}>LOGIN</AppText>
          <AppInput
              value={values.email}
              onChangeText={(value) => setFieldValue('email', value)}
              placeholder="EMAIL"
              label='EMAIL'
              ref={refEmail}
              returnKeyType={'next'}
              onSubmitEditing={()=>{refPassword.current.focus()}}
              keyboardType="email-address"
              error={errors.email}
              touched={touched.email}
          />
          <AppInput
              value={values.password}
              onChangeText={(value) => setFieldValue('password', value)}
              placeholder="EMAIL"
              label='PASSWORD'
              marginTop={"xs"}
              ref={refPassword}
              secureTextEntry
              error={errors.password}
              returnKeyType={'done'}
              touched={touched.password}
          />
          <AppButton
              label='Login'
              onPress={() => {
                handleSubmit()
                // dispatch(setAccountToken('adsadajsd12281'))
              }}
              style={{marginTop: 50}}
          />
        </Box>
      {/*</Formik>*/}

    </KeyboardAwareScrollView>
  );
};
