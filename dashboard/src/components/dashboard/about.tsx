import React from "react";
import { Form, Input, Button } from "antd";

interface ProfileFormValues {
  name: string;
  bio: string;
  designation: string;
  description: string;
}

const About: React.FC = () => {
  const [form] = Form.useForm<ProfileFormValues>();

  const onFinish = (values: ProfileFormValues) => {
    console.log("Form values:", values);
    // Here you can handle the form submission, e.g., sending data to an API
  };

  return (
    <Form
      form={form}
      name="profile"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input defaultValue="Sheikh Mohammad Nazmul H." disabled={true} />
      </Form.Item>

      <Form.Item
        name="bio"
        label="Bio"
        rules={[{ required: true, message: "Please input your bio!" }]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item
        name="designation"
        label="Designation"
        rules={[{ required: true, message: "Please input your designation!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default About;
