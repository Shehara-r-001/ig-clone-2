import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import {
  DotsHorizontalIcon,
  BookmarkIcon,
  HeartIcon,
  AnnotationIcon,
  PaperAirplaneIcon,
} from 'react-native-heroicons/outline';
import { HeartIcon as HeartFilledIcon } from 'react-native-heroicons/solid';
import FullWidthImage from 'react-native-fullwidth-image';
import FitImage from 'react-native-fit-image';

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Divider width={1} orientation='vertical' style={{ marginBottom: 5 }} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooterIcons />
      <PostFooter post={post} />
    </View>
  );
};

const PostFooter = ({ post }) => (
  <View style={{ marginLeft: 15, marginTop: 10, marginRight: 4 }}>
    <Text style={{ color: 'white' }}>
      {post.likes.toLocaleString('en')} people likes this..
    </Text>
    <View
      style={{
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 5,
      }}
    >
      <Text style={{ color: 'white', fontWeight: '700' }}>
        {post.user}{' '}
        <Text
          style={{
            color: 'white',
            color: '#d9d9d9',
          }}
        >
          {post.caption}
        </Text>
      </Text>
    </View>
    {!!post.comments.length && (
      <View>
        <Text style={{ color: '#bfbfbf', marginTop: 5 }}>
          View {post.comments.length > 1 ? 'all ' : ''}
          {post.comments.length}{' '}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      </View>
    )}
    <View style={{ marginTop: 5, marginRight: 3 }}>
      {post.comments.map((comment, index) => (
        <View key={index} style={{ flexDirection: 'row', marginBottom: 2 }}>
          <Text style={{ color: 'white', fontWeight: '600' }}>
            {comment.user}{' '}
            <Text style={{ color: '#d9d9d9' }}>{comment.comment}</Text>
          </Text>
        </View>
      ))}
    </View>
  </View>
);

const PostFooterIcons = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 12,
      marginLeft: 10,
    }}
  >
    <View style={{ flexDirection: 'row' }}>
      <HeartIcon style={{ color: 'white', marginLeft: 7 }} />
      <AnnotationIcon style={{ color: 'white', marginLeft: 12 }} />
      <PaperAirplaneIcon
        rotation={45}
        style={{
          color: 'white',
          transform: [{ rotate: '45deg' }],
          marginLeft: 12,
        }}
      />
    </View>
    <BookmarkIcon style={{ color: 'white', marginRight: 7 }} />
  </View>
);

const PostImage = ({ post }) => (
  //   <FullWidthImage source={{ uri: post.imageUrl }} />
  <FitImage
    source={{
      uri: post.imageUrl,
    }}
  />
);

const PostHeader = ({ post }) => (
  <View style={styles.headerCont}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={{
          uri: post.profilePic,
        }}
        style={styles.profPic}
      />
      <Text style={styles.userName}>{post.user}</Text>
    </View>
    <DotsHorizontalIcon style={{ color: 'white', marginRight: 5 }} />
  </View>
);

const styles = StyleSheet.create({
  headerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
    marginBottom: 5,
  },
  profPic: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#ff1ac6',
  },
  userName: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default Post;
