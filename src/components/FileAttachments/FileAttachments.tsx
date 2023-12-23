import React from "react";
import { IAttachment } from "../../types/post";
import FileItem from "./FileItem/FileItem";

interface IFileAttachmentsProps {
  files: IAttachment[];
}

const FileAttachments: React.FC<IFileAttachmentsProps> = (props) => {
  return (
    <div>
      {props.files.map((file, i) => (
        <FileItem key={i} file={file} />
      ))}
    </div>
  );
};

export default FileAttachments;
