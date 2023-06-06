import React from 'react';

const Avatar = (props)=> {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="25" cy="25" r="25" fill="#D9D9D9"/>
    </svg>
  );
};

export default Avatar;