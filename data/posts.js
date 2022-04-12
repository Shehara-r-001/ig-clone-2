import { users } from './users';

export const posts = [
  {
    imageUrl:
      'https://img.etimg.com/thumb/msid-90044567,width-650,imgsize-88974,,resizemode-4,quality-100/the-batman.jpg',
    user: users[0].user,
    likes: 129,
    caption: 'Hell Yeah..',
    profilePic: users[0].image,
    comments: [
      {
        user: 'superman',
        comment: 'Nice one..',
      },
      {
        user: 'spiderman',
        comment: 'Lets goooo..',
      },
    ],
  },
  {
    imageUrl:
      'https://media.wired.com/photos/5c54ee6a4feec32ca0f590d8/2:1/w_2400,h_1200,c_limit/superman-922909434.jpg',
    user: users[1].user,
    likes: 111,
    caption: '...........',
    profilePic: users[1].image,
    comments: [
      {
        user: 'batman',
        comment: 'Nice one..',
      },
      {
        user: 'spiderman',
        comment: 'Lets goooo..',
      },
    ],
  },
];
