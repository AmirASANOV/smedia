import React from "react";
import { IAttachment } from "../../../types/post";
import s from "./FileItem.module.scss";

interface IFileItemProps {
  file: IAttachment;
}

const FileItem: React.FC<IFileItemProps> = (props) => {
  console.log(props);
  return (
    <div className={s.wrapper}>
      <img className={s.fileLogo} src="/images/file/fileIcon.svg" alt="icon" />
      <div className={s.container}>
        <p>{props.file.file.replaceAll("/media/files/", "")}</p>
        <img
          className={s.downloadLogo}
          src="/images/file/download.svg"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default FileItem;
