import React from "react";
import { IAttachment } from "../../../types/post";
import s from "./FileItem.module.scss";
import axios from "axios";

interface IFileItemProps {
  file: IAttachment;
}

const FileItem: React.FC<IFileItemProps> = (props) => {
  const urlFile = `http://0.0.0.0:8080${props.file.file}`;

  const handleDownload = async () => {
    try {
      const response = await axios.get(urlFile, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", props.file.file);

      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Ошибка при скачивании файла:", error);
    }
  };

  return (
    <div className={s.wrapper}>
      <img className={s.fileLogo} src="/images/file/fileIcon.svg" alt="icon" />

      <p className={s.fileName}>{props.file.file}</p>

      <img
        className={s.downloadLogo}
        src="/images/file/download.svg"
        onClick={handleDownload}
        alt="icon"
      />
    </div>
  );
};

export default FileItem;
