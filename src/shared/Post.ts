import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

export interface Post {
  id: number;
  author: {
    id: number;
    username: string;
    avatarUrl: string;
  };
  title: string;
  content: string;
  containImage: boolean;
  imageUrl?: string;
  createdAt: string;
  reactions: Reaction[];
  totalComments: number;
  topComments: Comment[];
}
