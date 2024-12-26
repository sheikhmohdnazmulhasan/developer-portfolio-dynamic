import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import { ILoginFormData } from "../../interfaces/login-form-data.type";

const Login: React.FC = () => {
  const [form] = useForm<ILoginFormData>();

  const onFinish = async (values: ILoginFormData) => {
    try {
      // Validate the form data using Zod

      // If validation passes, you can proceed with login logic
      console.log("Login successful:", values);
      message.success("Login successful!");

      // Here you would typically make an API call to authenticate the user
      // For example:
      // await loginUser(values);
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex justify-center flex-col items-center p-24 h-screen w-full">
      <h1 className="text-2xl font-bold mb-7">Login</h1>
      <Form className="w-80" form={form} name="login" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
