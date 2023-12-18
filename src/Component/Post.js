import React from 'react';
import ProfileBar from './ProfileBar';
import Content from './Content';
import PostFooter from './PostFooter';

function Post() {
  return (
    <div className='mt-5 border'>
      <ProfileBar />
      <Content />
      <PostFooter />
    </div>
  )
}

export default Post