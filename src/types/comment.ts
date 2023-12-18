import { IProfile } from "./profile";

export interface IComment {
  id: number;
  post: number;
  profile: IProfile;
  text: string;
}
