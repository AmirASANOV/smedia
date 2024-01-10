import { IProfile } from "./profile";

export interface IPost {
  attachments: IAttachment[];
  id: number;
  text: string;
  profile: IProfile;
  likes: number;
  dislikes: number;
  comments: number;
  created_at: string;
  updated_at: string;
}

export type IAttachment = {
  type: "IMAGE" | "FILE";
  file: string;
};
