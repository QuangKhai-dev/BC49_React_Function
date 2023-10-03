// import React from 'react';

// export default function DemoUseState() {
//   // this.hoTen = 'Minh Cường';
//   // console.log(this.hoTen);
//   return <div>DemoUseState</div>;
// }

// câu lệnh để tạo một function component bằng arrow function
import React, { useState } from 'react';
import DemoProps from './DemoProps';

const DemoUseState = () => {
  // tạo state trên function component
  // khi sử dụng useState sẽ có 2 giá trị được bóc tách, giá trị đầu tiên là state, giá trị thứ 2 là phương thức dùng để setState
  // bên trong useState sẽ là giá trị mặc định cho state hiện có
  const [number, setNumber] = useState(9);
  const [active, setActive] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-dark"
      >
        Cộng 1
      </button>
      <p>{number}</p>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
        className="btn btn-danger"
      >
        Trừ 1
      </button>
      <div className="container">
        <button
          onClick={() => {
            setActive(!active);
          }}
          className="btn btn-warning"
        >
          Đăng nhập
        </button>
        {active ? 'Thế Hiếu' : 'Bấm vào để đăng nhập'}
      </div>
      <DemoProps number={number} />
    </div>
  );
};

export default DemoUseState;
