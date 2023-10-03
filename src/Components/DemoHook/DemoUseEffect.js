import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import DemoUnmount from './DemoUnmount';
const DemoUseEffect = () => {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(1);
  const [listShoes, setListShoes] = useState([]);
  const [detailItem, setDetailItem] = useState(null);
  const [active, setActive] = useState(true);
  // demo ref
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  // khi viết useEffect như cấu trúc này, sẽ chạy componentDidmount và componentDidupdate
  // useEffect(() => {
  //   console.log('Tôi là useEffect');
  // });

  // tham số
  // componentDidMount
  useEffect(() => {
    console.log('Component Didmount');
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    try {
      const res = await axios.get('https://shop.cyberlearn.vn/api/Product');
      console.log(res);
      setListShoes(res.data.content);
    } catch (err) {
      // thông báo lỗi cho người dùng
      console.log(err);
    }
  };

  // đây là useEffect chạy didmount và didUpdate có điều kiện
  // ở đây đang check một điều kiện ở [] , nếu number thay đổi useEffect này mới được phép chạy lại
  // useEffect(() => {
  //   console.log(number);
  //   getProductById(number);
  // }, [number]);

  const getProductById = async (id) => {
    try {
      const res = await axios.get(
        `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
      );
      console.log(res);
      setDetailItem(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(buttonRef);
  // buttonRef biến dùng lưu trữ từ useRef,
  // ở đây nếu muốn dom tới các nút button, chúng ta chỉ cần gọi thuộc tính ref trong các thẻ jsx và truyền biến đang chứa giá trị từ useRef
  if (buttonRef.current) {
    buttonRef.current.classList.add('fs-1');
  }
  // if (inputRef.current) {
  //   console.log('Hello');
  //   console.log(inputRef.current.value);
  // }
  console.log('abc');
  console.log(inputRef);
  return (
    <div>
      <input
        type="text"
        onChange={() => {
          console.log(inputRef.current.value);
        }}
        ref={inputRef}
      />
      <button
        ref={buttonRef}
        onClick={() => {
          setActive(!active);
        }}
        className="btn btn-danger"
      >
        Tắt component con
      </button>
      {active && <DemoUnmount />}

      <div>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
          className="btn btn-dark"
        >
          Cộng
        </button>
        <p>{number}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setLike(like + 1);
          }}
          className="btn btn-success"
        >
          Tăng like
        </button>
        <p>{like}</p>
      </div>
      <div className="container">
        {detailItem && (
          <div className="card w-25">
            <img src={detailItem.image} alt="" />
            <p>{detailItem.name}</p>
            <p>{detailItem.price}</p>
          </div>
        )}

        <div className="row ">
          {listShoes.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card m-2 p-3">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button
                    onClick={() => {
                      setNumber(item.id);
                    }}
                    className="btn btn-primary"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoUseEffect;
