import { IProfile } from "./profile";

export interface IPost {
  attachments: IAttachment[];
  id: number;
  text: string;
  profile: IProfile;
  likes: number;
  dislikes: number;
}

export type IAttachment = {
  type: string;
  file: string;
};
