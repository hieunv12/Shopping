import React from 'react';

export const loginScreen = () => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ height: '100%' }}>
      <View style={styles.wrapper}>
        <LogoIcon />
        <AppText style={styles.heading}>Welcome back</AppText>
        <AppText style={styles.desc}>Login in to your account</AppText>
        <Formik
          initialValues={formInitialValues}
          validationSchema={
            type === 'phone' ? validationSchemaPhone : validationSchemaEmail
          }
          onSubmit={handleLogin}
          validateOnChange={false}
        >
          {formikProps => (
            <>
              <View style={{ flexDirection: 'row' }}>
                {type === 'phone' && (
                  <>
                    <AppSelect
                      placeholder={{
                        key: '0',
                        label: 'Australia',
                        inputLabel: '🇦🇺 +61',
                        value: 0,
                      }}
                      containerStyleWrapper={{
                        flex: 0.32,
                      }}
                      items={countryDialArray}
                      onValueChange={value => {
                        formikProps.setFieldValue('code', value);
                      }}
                      value={formikProps.values.code}
                      errorStyle={{
                        marginLeft: Spacing.width16,
                        marginTop: 1,
                      }}
                      error={formikProps.errors.code}
                    />
                    <AppMaskInput
                      style={{ flex: 0.68, marginLeft: Spacing.width10 }}
                      numpad
                      placeholder="000 000 000"
                      mask="[000] [000] [000] [000] [000]"
                      value={formikProps.values.phone}
                      setFieldValue={formikProps.setFieldValue}
                      fieldValue="phone"
                    />
                  </>
                )}
                {type === 'email' && (
                  <>
                    <AppInput
                      placeholder="Enter your email"
                      value={formikProps.values.email}
                      onValueChange={formikProps.handleChange('email')}
                    />
                  </>
                )}
              </View>
              <AppText
                style={{
                  ...FontWithBold.Bold_400,
                  fontSize: FontSize.Font11,
                  color: Colors.gray,
                }}
              >
                By continuing, you agree to the{' '}
                <AppText style={styles.termTxt}>Terms of Use </AppText>
                and
                <AppText style={styles.termTxt}> Privacy Policy</AppText>.
              </AppText>
              <AppButton
                onPress={() => {
                  formikProps.handleSubmit();
                }}
                style={{ marginTop: Spacing.height32 }}
                label="Continue"
              />
            </>
          )}
        </Formik>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.gray3,
            height: 1,
            marginVertical: Spacing.height48,
            alignItems: 'center',
          }}
        >
          <AppText
            style={{
              position: 'absolute',
              ...FontWithBold.Bold_600,
              fontSize: FontSize.Font17,
              bottom: Device.isIos ? -10 : -14,
              paddingHorizontal: 20,
              color: Colors.gray3,
              backgroundColor: Colors.background,
            }}
          >
            or
          </AppText>
        </View>
        <AppButton
          style={styles.socialBtn}
          Icon={type === 'phone' ? EmailIcon : PhoneIcon}
          onPress={handleContinueWithEmailOrPhone}
          label={
            type === 'phone' ? 'Continue with Email' : 'Continue with Phone'
          }
        />
        {Platform.OS === 'ios' && (
          <AppButton
            style={styles.socialBtn}
            Icon={AppleIcon}
            onPress={() => onLoginSocial('apple')}
            label="Continue with Apple"
          />
        )}
        <AppButton
          style={styles.socialBtn}
          Icon={GoogleIcon}
          onPress={() => onLoginSocial('google')}
          label="Continue with Google"
        />
        <AppButton
          style={styles.socialBtn}
          Icon={FacebookIcon}
          onPress={() => onLoginSocial('facebook')}
          label="Continue with Facebook"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
