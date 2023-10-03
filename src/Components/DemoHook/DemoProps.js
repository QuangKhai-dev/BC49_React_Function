import React from 'react';

// props được sử dụng tương tự như ở class component
// có thể bóc props ra ngay tại nơi truyền tham số
const DemoProps = ({ number }) => {
  console.log(number);
  return <div>DemoProps</div>;
};

export default DemoProps;
