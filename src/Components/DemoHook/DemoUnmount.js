import React, { useEffect } from 'react';

const DemoUnmount = () => {
  useEffect(() => {
    console.log('Tôi là didmount của component con');

    // đại diện cho component will unmount
    return () => {
      // bên trong đây sẽ là nơi xử lí các hành động khi component biến mất khỏi giao diện
      console.log('Tôi đã biến mất');
    };
  }, []);

  return <div>DemoUnmount</div>;
};

export default DemoUnmount;
