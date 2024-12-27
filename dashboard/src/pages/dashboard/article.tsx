import { useState } from "react";
import { Table, Button, Space, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface BlogPost {
  key: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

const initialBlogPosts: BlogPost[] = [
  {
    key: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building your first app.",
    date: "2023-04-15",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    key: 2,
    title: "Advanced TypeScript Techniques",
    excerpt: "Dive deep into TypeScript and learn advanced concepts.",
    date: "2023-04-20",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    key: 3,
    title: "Mastering CSS Grid",
    excerpt: "Unlock the power of CSS Grid for complex layouts.",
    date: "2023-04-25",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
];

export default function ArticleManagement() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);

  const handleEdit = (key: number) => {
    // Implement edit functionality
    console.log(`Editing post with key: ${key}`);
    message.info(`Editing post with key: ${key}`);
  };

  const handleDelete = (key: number) => {
    setBlogPosts(blogPosts.filter((post) => post.key !== key));
    message.success("Post deleted successfully");
  };

  const columns: ColumnsType<BlogPost> = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "image",
      render: (imageUrl: string, record: BlogPost) => (
        <img
          src={imageUrl}
          alt={record.title}
          style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 4 }}
        />
      ),
      width: 100,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string) => <strong>{text}</strong>,
    },
    {
      title: "Excerpt",
      dataIndex: "excerpt",
      key: "excerpt",
      responsive: ["md"],
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      responsive: ["sm"],
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.key)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this post?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Manage Article
      </h1>
      <Table
        columns={columns}
        dataSource={blogPosts}
        rowKey="key"
        pagination={{ pageSize: 5 }}
        scroll={{ x: true }}
      />
    </div>
  );
}
