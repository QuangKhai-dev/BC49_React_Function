import React from 'react';
import { useParams } from 'react-router-dom';

const DetailItem = () => {
  const { id } = useParams();
  console.log(id);
  return <div>DetailItem</div>;
};

export default DetailItem;
