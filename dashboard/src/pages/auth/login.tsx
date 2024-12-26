import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import { ILoginFormData } from "../../interfaces/login-form-data.type";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginUserMutation } from "../../redux/features/auth/auth.api";
import { setUser } from "../../redux/features/auth/auth.slice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const [form] = useForm<ILoginFormData>();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: ILoginFormData) => {
    try {
      const response = await loginUser(values).unwrap();

      const authInfo = {
        token: response.token,
        user: {
          _id: response.user._id,
          name: response.user.name,
          email: response.user.email,
        },
      };
      dispatch(setUser(authInfo));
      toast.success("Login success");
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
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
