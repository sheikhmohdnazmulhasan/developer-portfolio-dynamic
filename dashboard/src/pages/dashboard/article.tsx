import { Table, Button, Space, Popconfirm, message, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import {
  useDeleteArticleMutation,
  useGetAllArticlesQuery,
} from "../../redux/features/articles/article.api";
import ErrorElement from "../../components/error";
import Loading from "../../components/loading";
import dateFormatter from "../../utils/date-formatter";
import { toast } from "sonner";

interface BlogPost {
  key: number;
  title: string;
  tags: string[];
  createdAt: string;
  imageUrl: string;
  image: string;
  _id: string;
}

export default function ArticleManagement() {
  const {
    data: articles,
    isLoading,
    isError,
  } = useGetAllArticlesQuery(undefined);
  const [deleteArticle] = useDeleteArticleMutation();

  const handleEdit = (key: number) => {
    // Implement edit functionality
    console.log(`Editing post with key: ${key}`);
    message.info(`Editing post with key: ${key}`);
  };

  const handleDelete = async (_id: string) => {
    try {
      const response = await deleteArticle({ _id }).unwrap();
      if (response.success) {
        toast.success("Article successfully deleted");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const columns: ColumnsType<BlogPost> = [
    {
      title: "Image",
      dataIndex: "image",
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
      render: (text: string) => <strong>{text.slice(0, 45)} ...</strong>,
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) =>
        tags.map((tag: string) => <Tag color="processing">{tag}</Tag>),
    },
    {
      title: "Date",
      dataIndex: "createAt",
      key: "createdAt",
      render: (_, record) => <p>{dateFormatter(record.createdAt)}</p>,
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
            onConfirm={() => handleDelete(record._id)}
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

  if (isError) return <ErrorElement />;

  return (
    <>
      {isLoading && <Loading />}
      <div style={{ padding: "24px" }}>
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Manage Article
        </h1>
        <Table
          columns={columns}
          dataSource={articles}
          rowKey="key"
          pagination={{ pageSize: 5 }}
          scroll={{ x: true }}
        />
      </div>
    </>
  );
}
