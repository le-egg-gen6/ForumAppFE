import { Reaction } from "./Reaction";

export interface Comment {
  id: number;
  postId: number;
  body: string;
  author: {
    id: number;
    username: string;
    avatarUrl: string;
  };
  createdAt: string;
  reactions: Reaction[];
}
