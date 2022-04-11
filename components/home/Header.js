import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { HeartIcon } from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/insta-logo-inv.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsCont}>
        <TouchableOpacity>
          {/* <Image
            style={styles.icon}
            source={require('../../assets/heart1.png')}
          /> */}
          <HeartIcon style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.notificationCont}>
            <Text style={{ color: 'white', fontWeight: '700' }}>3</Text>
          </View>
          <Image
            style={styles.iconImg}
            source={require('../../assets/messenger.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconsCont: {
    flexDirection: 'row',
  },
  logo: {
    height: 50,
    width: 120,
    resizeMode: 'contain',
  },
  icon: {
    width: 25,
    height: 25,
    // resizeMode: 'contain',
    marginLeft: 10,
    color: 'white',
  },
  iconImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  notificationCont: {
    backgroundColor: '#ff1ac6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 50,
    right: -7,
    top: -7,
    paddingHorizontal: 5,
  },
});

export default Header;
