import React from 'react';
import UserPost from './Endpoints/UserPost';
import TokenPost from './Endpoints/TokenPost';
import PhotoPost from './Endpoints/PhotoPost';
import PhotoGet from './Endpoints/PhotoGet';

const Api = () => {
  return (
    <div>
      <h2>Photo GET</h2>
      <PhotoGet />
      <h2>Photo POST</h2>
      <PhotoPost />
      <h2>Token POST</h2>
      <TokenPost />
      <h2>User POST</h2>
      <UserPost />
    </div>
  );
};

export default Api;
