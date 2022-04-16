import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Formik } from 'formik';

const Upload = () => {
  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View>
            <Image
              style={{ width: 100, height: 100, marginTop: 20, marginLeft: 10 }}
              source={{
                uri: 'https://www.beelights.gr/assets/images/empty-image.png',
              }}
            />
          </View>
          <TextInput
            placeholder='Enter the caption..'
            placeholderTextColor='gray'
            style={[styles.textInput, { marginTop: 10 }]}
          />
          <TextInput
            placeholder='Enter the image URL..'
            placeholderTextColor='gray'
            style={styles.textInput}
          />
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 10,
    marginTop: 5,
    width: '90%',
    fontSize: 16,
    color: 'white',
  },
});

export default Upload;
