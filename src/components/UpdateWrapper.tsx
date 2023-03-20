import React from 'react';
import { useParams } from 'react-router-dom';
import Update from './Update';

const UpdateWrapper: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  
  return <Update userId={Number(userId)} />;
};

export default UpdateWrapper;