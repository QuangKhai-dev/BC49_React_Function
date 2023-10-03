import React from 'react';
import Lottie from 'react-lottie';
import * as animate404 from './../../assets/animation/animate404.json';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
const Page404 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  // console.log(navigate);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animate404,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice',
    // },
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Lottie options={defaultOptions} height={600} width={800} />
      <button
        onClick={() => {
          // path nhận được là /abc thì chuyển người dùng về trang chủ còn không thì không hoạt động
          // if (location.pathname == '/abc') {
          navigate('/');
          // }
        }}
        className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-700 duration-500 mt-5"
      >
        Quay về trang chủ
      </button>
    </div>
  );
};

export default Page404;
