import { CommentInfo } from "./Comment";
import { Reaction } from "./Reaction";
import { SimpleUserInfo } from "./User";

export interface PostInfo {
  id: number;
  content: string;
  author: SimpleUserInfo;
  images: string[];
  createdAt: Date;
  reactions: Reaction[];
  topComments: CommentInfo[];
}

export interface SimplePostInfo {
  id: number;
  content: string;
  author: SimpleUserInfo;
  images: string[];
  createdAt: Date;
}
