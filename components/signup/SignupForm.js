import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const SignupForm = ({ navigation }) => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required()
      .min(8, 'Password must be at least 8 characters'),
    username: Yup.string()
      .required()
      .min(4, 'Username must be at least 4 characters'),
  });

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={SignupSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View style={{ marginBottom: 10, marginTop: 20 }}>
              <TextInput
                placeholder='Email or Phone number'
                placeholderTextColor='#cccccc'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                autoCapitalize='none'
                style={[
                  styles.textInput,
                  {
                    borderColor:
                      values.email < 1 || Validator.validate(values.email)
                        ? '#737373'
                        : '#ff3333',
                  },
                ]}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                placeholder='Username'
                placeholderTextColor='#cccccc'
                secureTextEntry={true}
                textContentType='username'
                autoFocus={true}
                autoCapitalize='none'
                style={[
                  styles.textInput,
                  {
                    borderColor:
                      values.username.length < 1 || values.username.length >= 4
                        ? '#737373'
                        : '#ff3333',
                  },
                ]}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <TextInput
                placeholder='Password'
                placeholderTextColor='#cccccc'
                secureTextEntry={true}
                textContentType='password'
                autoFocus={true}
                autoCapitalize='none'
                style={[
                  styles.textInput,
                  {
                    borderColor:
                      values.password.length < 1 || values.password.length >= 8
                        ? '#737373'
                        : '#ff3333',
                  },
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>

            <Pressable onPress={handleSubmit} style={styles.btn(isValid)}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}
              >
                Sign Up
              </Text>
            </Pressable>
            {/* <Button onPress={handleSubmit} title='Log In' /> */}
            <View
              style={{
                marginTop: 20,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#cccccc' }}>
                Already have an account?
                <Text
                  onPress={() => navigation.goBack()}
                  style={[styles.fPassword]}
                >
                  {' '}
                  Log In
                </Text>
              </Text>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#737373',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    color: '#e6e6e6',
  },
  fPassword: {
    color: '#2196F3',
    marginTop: 10,
    textAlign: 'center',
    // opacity: 0.9,
  },
  btn: (isValid) => ({
    backgroundColor: isValid ? '#2196F3' : '#55aef6',
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 20,
  }),
});

export default SignupForm;
