import React from 'react';
import { Space, Table, Tag } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';
const TableUser = ({ arrUser, handleDeleteUser }) => {
  const columns = [
    {
      // title đại diện cho tên cột
      title: 'Họ tên',
      dataIndex: 'hoTen',
      key: 'hoTen',
      render: (text, record, index) => {
        // console.log(text);
        // console.log(record);
        // console.log(index);
        return <div>hello</div>;
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDienThoai',
      key: 'soDienThoai',
    },
    {
      title: 'Facebook URL',
      key: 'facebookUrl',
      dataIndex: 'facebookUrl',
      render: (text, record, index) => {
        return (
          <a href={text} target="_blank">
            <Tag icon={<FacebookOutlined />} color="#3b5999">
              Facebook
            </Tag>
          </a>
        );
      },
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button className="text-xl text-blue-500">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteUser(record.email);
            }}
            className="text-xl text-red-500"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2 className="mb-5">Danh sách người dùng</h2>
      <Table columns={columns} dataSource={arrUser} />
    </div>
  );
};

export default TableUser;
