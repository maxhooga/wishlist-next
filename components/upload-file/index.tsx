import { Upload } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { UploadChangeParam, UploadListType } from "antd/lib/upload/interface";

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function UploadFile({
  action,
  listType,
  button = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  ),
  ...rest
}: {
  action: string;
  listType: UploadListType;
  button: string | React.ReactElement;
}) {
  const [fileList, setFileList] = React.useState([]);

  const handleChange = ({ fileList }: UploadChangeParam) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFileList([...fileList]);

  return (
    <Upload
      action={action}
      listType={listType}
      fileList={fileList}
      onChange={handleChange}
      {...rest}
    >
      {button}
    </Upload>
  );
}
