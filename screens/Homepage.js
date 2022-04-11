import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';

const Homepage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#000000' barStyle='light-content' />
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
