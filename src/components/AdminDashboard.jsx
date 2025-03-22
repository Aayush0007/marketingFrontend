import React, { useState, useEffect } from 'react';
import { Table, Button, Tabs, Modal, Input, message } from 'antd';
import { DownloadOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';

const { TabPane } = Tabs;

const AdminDashboard = () => {
  const [data, setData] = useState({
    users: [],
    contacts: [],
    services: [],
    newsletters: []
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const responses = await Promise.all([
          fetch('/api/admin/users', { headers }),
          fetch('/api/admin/contacts', { headers }),
          fetch('/api/admin/services', { headers }),
          fetch('/api/admin/newsletters', { headers })
        ]);
        
        const jsonResponses = await Promise.all(responses.map(res => res.json()));
        setData({
          users: jsonResponses[0],
          contacts: jsonResponses[1],
          services: jsonResponses[2],
          newsletters: jsonResponses[3]
        });
      } catch (error) {
        message.error('Error fetching data');
      }
    };
    fetchData();
  }, [token]);

  const columns = {
    users: [
      { title: 'Name', dataIndex: 'name' },
      { title: 'Email', dataIndex: 'email' },
      { title: 'Phone', dataIndex: 'phone' },
      { title: 'Role', dataIndex: 'role' },
      {
        title: 'Actions',
        render: (_, record) => (
          <>
            <Button icon={<EditOutlined />} />
            <Button danger icon={<DeleteOutlined />} />
          </>
        ),
      },
    ],
    // Add other column configurations
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Users" key="1">
            <div className="mb-4 flex justify-between">
              <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>
                Add User
              </Button>
              <Button icon={<DownloadOutlined />}>Export Data</Button>
            </div>
            <Table dataSource={data.users} columns={columns.users} rowKey="id" />
          </TabPane>
          {/* Add other tabs */}
        </Tabs>
      </div>

      <Modal
        title="Add New User"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Input placeholder="Name" className="mb-4" />
        <Input placeholder="Email" className="mb-4" />
        <Input placeholder="Phone" className="mb-4" />
        <Button type="primary">Save User</Button>
      </Modal>
    </div>
  );
};

export default AdminDashboard;