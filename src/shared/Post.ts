import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

export interface Post {
    id: number;
    author: {
        id: number;
        username: string;
        avatarUrl: string;
    };
    content: string;
    imageUrl?: string;
    timestamp: string;
    reactions: Reaction[];
    topComments: Comment[];
}