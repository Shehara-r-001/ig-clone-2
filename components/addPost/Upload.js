import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  imageUrl: Yup.string().url().required('Image URL is required'),
  caption: Yup.string().max(1500, 'Maximum number of characters reached'),
});

const Upload = () => {
  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={schema}
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
            multiline={true}
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}
          />
          <TextInput
            placeholder='Enter the image URL..'
            placeholderTextColor='gray'
            style={styles.textInput}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ color: 'red', fontSize: 12 }}>
              {errors.imageUrl}
            </Text>
          )}
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
