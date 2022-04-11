import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { users } from '../../data/users';

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {users.map((story, index) => (
          <View key={index} style={styles.storyCont}>
            <Image
              style={styles.story}
              source={{
                uri: story.image,
              }}
            />
            <Text style={styles.userName}>
              {story.user.length > 10
                ? story.user.slice(0, 9).toLowerCase() + '..'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storyCont: {
    alignItems: 'center',
  },
  story: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginLeft: 8,
    borderWidth: 3,
    borderColor: '#ff1ac6',
  },
  userName: {
    color: 'white',
  },
});

export default Stories;
