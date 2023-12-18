import { IProfile } from "./profile";

export interface IPost {
  id: number;
  text: string;
  profile: IProfile;
}
