import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import {
  SearchIcon,
  HomeIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  PlusIcon,
  PlusSmIcon,
} from 'react-native-heroicons/outline';
import {
  SearchIcon as SearchSolidIcon,
  HomeIcon as HomeSolidIcon,
  VideoCameraIcon as VideoCameraSolidIcon,
  ShoppingBagIcon as ShoppinBagSolidIcon,
  UserCircleIcon,
  PlusIcon as PlusSolidIcon,
  PlusSmIcon as PlusSmSolidIcon,
} from 'react-native-heroicons/solid';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { users } from '../../data/users';

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.bNavCont}>
      <Divider width={1} orientation='vertical' style={{ marginBottom: 5 }} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 5,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity>
          <HomeSolidIcon size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SearchIcon size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('AddPostScreen')}>
          <PlusSmIcon size={25} style={[styles.icon, styles.iconBorder]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ShoppingBagIcon size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.profPic} source={{ uri: users[0].image }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bNavCont: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    zIndex: 50,
  },
  icon: {
    color: 'white',
  },
  iconBorder: {
    borderWidth: 2.5,
    borderColor: 'white',
    borderRadius: 5,
  },
  profPic: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff1ac6',
  },
});

export default BottomNav;
