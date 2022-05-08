import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import Upload from './Upload';

const AddNewPost = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <Upload navigation={navigation} />
    </>
  );
};

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ChevronLeftIcon size={30} style={{ color: 'white', marginLeft: 10 }} />
    </TouchableOpacity>
    <Text style={styles.headerText}>Add new post</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  headerText: {
    color: 'white',
    width: '80%',
    alignContent: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    // justifyContent: 'space-around',
    // flex: 1,
    // textAlign: 'center',
    fontWeight: '600',
  },
});

export default AddNewPost;
