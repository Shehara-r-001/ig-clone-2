import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import validUrl from 'valid-url';

const schema = Yup.object().shape({
  imageUrl: Yup.string().url().required('Image URL is required'),
  caption: Yup.string()
    .required()
    .max(1500, 'Maximum number of characters reached'),
});

const placeHolderImage =
  'https://www.beelights.gr/assets/images/empty-image.png';

const Upload = ({ navigation }) => {
  const [thumbUrl, setThumbUrl] = useState();
  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => {
        console.log(values);
        console.log('Post was created successfully..');
        navigation.goBack();
      }}
      validationSchema={schema}
      validateOnMount={true}
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
                uri: validUrl.isUri(thumbUrl) ? thumbUrl : placeHolderImage,
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
            onChange={(e) => setThumbUrl(e.nativeEvent.text)}
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
          {/* <Pressable
            onPress={handleSubmit}
            disabled={!isValid}
            style={{
              width: '50%',
              backgroundColor: '#e60073',
              marginTop: 30,
              height: 30,
              borderRadius: 5,
              alignSelf: 'center',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                paddingVertical: 6,
                textTransform: 'uppercase',
                fontSize: 16,
              }}
            >
              Share
            </Text>
          </Pressable> */}
          <Button title='Share' onPress={handleSubmit} disabled={!isValid} />
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
