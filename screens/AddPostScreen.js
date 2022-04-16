import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import AddNewPost from '../components/addPost/AddNewPost';

const AddPostScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <StatusBar backgroundColor='#000000' barStyle='light-content' />
      <AddNewPost />
    </SafeAreaView>
  );
};

export default AddPostScreen;
