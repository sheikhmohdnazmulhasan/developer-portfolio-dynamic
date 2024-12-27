import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import RichTextEditor from "../../utils/rich-text-editor";
import { useFetchAboutQuery } from "../../redux/features/about/about.api";
import Loading from "../loading";

interface ProfileFormValues {
  name: string;
  bio: string;
  designation: string;
  description: string;
}

const About: React.FC = () => {
  const [form] = Form.useForm<ProfileFormValues>();
  const [richText, setRichText] = useState<string>("");

  const { data, isLoading } = useFetchAboutQuery(undefined);

  const onFinish = (values: ProfileFormValues) => {
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([, value]) => value !== undefined)
    );
  };

  return (
    <>
      {isLoading && <Loading />}
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
          rules={[{ message: "Please input your name!" }]}
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
          rules={[
            { required: true, message: "Please input your designation!" },
          ]}
        >
          <Input />
        </Form.Item>
        <RichTextEditor
          richText={richText}
          setRichText={setRichText}
          rows={10}
        />

        <Form.Item className="pt-10">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default About;
