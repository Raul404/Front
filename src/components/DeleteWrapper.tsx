import React from 'react';
import { useParams } from 'react-router-dom';
import Delete from './Delete';

const DeleteWrapper: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  
  return <Delete userId={Number(userId)} />;
};

export default DeleteWrapper;