import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import LoginForm from '../components/login/LoginForm';

const igLogo =
  'https://pngset.com/images/insta-instagram-graphics-art-text-logo-transparent-png-1001130.png';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#000000' barStyle='light-content' />
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image
          source={require('../assets/580b57fcd9996e24bc43c521.png')}
          style={styles.ig_Logo}
        />
      </View>
      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'black',
    flex: 1,
  },
  ig_Logo: {
    width: 80,
    height: 80,
  },
});

export default Login;
