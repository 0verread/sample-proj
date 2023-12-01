import React from 'react';

import Header from '../components/Header';
import Post from '../components/Post';

import POSTS from '../data/data';


const Home = () => {
  return (
    <div className='mx-12'>
      <Header />
      <Post postdata="test"/>
    </div>

  )
}

export default Home