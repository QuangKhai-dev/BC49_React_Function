import React, { useEffect, useState } from 'react';
import TableUser from './TableUser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
const DemoFormik = () => {
  const [arrUser, setArrUser] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      hoTen: '',
      email: '',
      soDienThoai: '',
      matKhau: '',
      nhapLaiMatKhau: '',
      facebookUrl: '',
    },
    validationSchema: Yup.object({
      // kiểm tra rỗng qua required
      hoTen: Yup.string().required('Vui lòng không bỏ trống'),
      email: Yup.string()
        .required('Vui lòng nhập email')
        .email('Không đúng định dạng email'),
      // kiểm tra theo regex thông qua matches
      soDienThoai: Yup.string()
        .required('Vui lòng không bỏ trống')
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          'Không đúng định dạng số điện thoại'
        ),
      // mật khẩu nhiều hơn 6 ký tự,ít hơn 10 ký tự, có ít nhất 1 số và có 1 ký tự đặc biệt
      matKhau: Yup.string()
        .required('Vui lòng không bỏ trống')
        .min(6, 'Vui lòng nhập hơn 6 ký tự')
        .max(10, 'Vui lòng không nhập quá 10 ký tự')
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
          'Vui lòng nhập mật khẩu có ít nhất một số và một ký tự đặc biệt'
        ),
      nhapLaiMatKhau: Yup.string()
        .required('Vui lòng không bỏ trống')
        .oneOf([Yup.ref('matKhau'), null], 'Mật khẩu không khớp'),
      facebookUrl: Yup.string()
        .required('Vui lòng không bỏ trống')
        .matches(
          '(?:(?:http|https)://)?(?:www.)?facebook.com/?',
          'Định dạng url facebook không đúng'
        ),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setState cho arrUser
      const newArrUser = [...arrUser];
      newArrUser.push(values);
      setArrUser(newArrUser);
      // lưu localStore

      localStorage.setItem('arrUser', JSON.stringify(newArrUser));
    },
  });
  const { handleChange, handleSubmit, values, errors, handleBlur, touched } =
    formik;
  // console.log(errors);
  // console.log(touched);
  // console.log(arrUser);
  useEffect(() => {
    // set dữ liệu cho state khi localstore có dữ liệu
    const dataLocal = JSON.parse(localStorage.getItem('arrUser'));
    if (dataLocal) {
      setArrUser(dataLocal);
    }
  }, []);

  const handleDeleteUser = (email) => {
    // tìm vị trí của phần tử cần xoá
    // console.log(email);
    const index = arrUser.findIndex((item) => item.email == email);
    if (index != -1) {
      const newArrUser = [...arrUser];
      newArrUser.splice(index, 1);
      setArrUser(newArrUser);
      // lưu dữ liệu mới vào local
      localStorage.setItem('arrUser', JSON.stringify(newArrUser));
      messageApi.open({
        type: 'success',
        content: 'Xoá thành công',
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className="space-y-5 container mx-auto py-10">
        <h2>Tạo người dùng</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="hoTen"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Họ tên
              </label>
              <input
                type="text"
                id="hoTen"
                name="hoTen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập tên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTen}
              />
              {/* Kiểm tra nếu như có lỗi ở trường input này và người dùng đã click
            vào input thì mới show lên lỗi */}
              {errors.hoTen && touched.hoTen && (
                <p className="mt-1 text-red-500 text-xs">{errors.hoTen}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="soDienThoai"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Số điện thoại
              </label>
              <input
                type="text"
                id="soDienThoai"
                name="soDienThoai"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập số điện thoại"
                onChange={handleChange}
                value={values.soDienThoai}
                onBlur={handleBlur}
              />
              {errors.soDienThoai && touched.soDienThoai && (
                <p className="mt-1 text-red-500 text-xs">
                  {errors.soDienThoai}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="matKhau"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="text"
                id="matKhau"
                name="matKhau"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập số điện thoại"
                onChange={handleChange}
                value={values.matKhau}
                onBlur={handleBlur}
              />
              {errors.matKhau && touched.matKhau && (
                <p className="mt-1 text-red-500 text-xs">{errors.matKhau}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="nhapLaiMatKhau"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="nhapLaiMatKhau"
                name="nhapLaiMatKhau"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập số điện thoại"
                onChange={handleChange}
                value={values.nhapLaiMatKhau}
                onBlur={handleBlur}
              />
              {errors.nhapLaiMatKhau && touched.nhapLaiMatKhau && (
                <p className="mt-1 text-red-500 text-xs">
                  {errors.nhapLaiMatKhau}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="facebookUrl"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Facebook url
              </label>
              <input
                type="text"
                id="facebookUrl"
                name="facebookUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập số điện thoại"
                onChange={handleChange}
                value={values.facebookUrl}
                onBlur={handleBlur}
              />
              {errors.facebookUrl && touched.facebookUrl && (
                <p className="mt-1 text-red-500 text-xs">
                  {errors.facebookUrl}
                </p>
              )}
            </div>
            <div className="space-x-4">
              <button
                type="submit"
                className="bg-black text-white py-2 px-5 rounded"
              >
                Thêm người dùng
              </button>
              <button className="bg-red-500 text-white py-2 px-5 rounded">
                Cập nhật người dùng
              </button>
            </div>
          </div>
        </form>
        <TableUser handleDeleteUser={handleDeleteUser} arrUser={arrUser} />
      </div>
    </>
  );
};

export default DemoFormik;
