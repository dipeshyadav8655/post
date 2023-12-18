import React from 'react';
import ProfileIcon from '../Assets/user icon.svg';

function ProfileBar() {
  return (
    <div className='m-[5vw] flex items-center gap-4'>
      <div className='p-8 w-[70px] rounded-full border border-black'>
        <img src={ProfileIcon} alt='User Icon' className='' />
      </div>
      <div className='text-[#5A5A5A] font-normal text-lg'>
        <p>Salesforce</p>
        <p className='text-xs'>4,00,000 followers</p>
        <p className='text-xs'>Promoted</p>
      </div>
    </div>
  )
}

export default ProfileBar