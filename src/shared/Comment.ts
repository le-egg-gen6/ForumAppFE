import { Reaction } from "./Reaction";

export interface Comment {
  id: number;
  text: string;
  author: {
    id: number;
    username: string;
    avatarUrl: string;
  };
  timestamp: string;
  reactions: Reaction[];
}
