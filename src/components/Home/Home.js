import React, { useState } from "react";
import { PrimaryButton } from "../HOC/button";
import { useNavigate } from "react-router";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useRef } from "react";
import "../Authentication/login.less";
import "../../assets/style.less";

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/portfolio-fe/login");
  };

  const count = useRef(0);
  const [counter, setCounter] = useState(0);
  const { Dragger } = Upload;

  // Allowed file types
  const allowedFileTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  // Function to check if the file type is allowed
  const isFileTypeAllowed = (file) => allowedFileTypes.includes(file.type);

  return (
    <div>
      <h1>
        Home {count.current} {counter}
      </h1>
      <p>Welcome Home page!</p>
      <PrimaryButton
        text="Login Page"
        onClick={() => {
          count.current = count.current + 1;
          setCounter(counter + 1);
          console.log("count", count, counter);
        }}
      />
      <Dragger
        accept=".pdf,.doc,.docx"
        beforeUpload={(file) => {
          if (!isFileTypeAllowed(file)) {
            message.error("Only PDF and Word documents are allowed.");
            return false;
          }
          return true;
        }}
        onChange={(info) => {
          const { status } = info.file;
          if (status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Only PDF and Word documents are allowed
        </p>
      </Dragger>
    </div>
  );
};

export default Home;
