import React from 'react';
import LikesIcon from '../Assets/like-button-black-icon.svg';
import DropDown from '../Assets/Group 6.svg';
import LikeIcon from '../Assets/Like.svg';
import CommentsIcon from '../Assets/Comment.svg';
import RepostIcon from '../Assets/Repost.svg';
import ShareIcon from '../Assets/Share.svg'; 

function PostFooter() {
  return (
    <div className=''>
      <div className='w-full border p-3 flex justify-between'>
        <div className='flex items-center justify-center gap-2'>
          <img src={LikesIcon} alt='Likes' />
      <p>10</p>
        </div>
      <p>1 comment</p>
      </div>
      <div className='m-3 flex justify-between'>
        <div>
        <img src={DropDown} alt='Drop Down' />
        </div>
        <img src={LikeIcon} alt='Drop Down' />
        <img src={CommentsIcon} alt='Drop Down' />
        <img src={RepostIcon} alt='Drop Down' />
        <img src={ShareIcon} alt='Drop Down' />
      </div>
    </div>
  )
}

export default PostFooter