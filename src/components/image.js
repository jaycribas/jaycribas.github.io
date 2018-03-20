import React from 'react'

const Image = ({imgUrl}) => {
  return (
    <div className="profile-image">
      <img src={imgUrl} alt="broad" />
    </div>
  )
};

export default Image;
