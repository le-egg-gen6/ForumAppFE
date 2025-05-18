import { Reaction } from "./Reaction";
import { SimpleUserInfo } from "./User";

export interface MessageInfo {
    id : number;
    body: string;
    type: "text" | "notification";
    author: SimpleUserInfo;
    reactions: Reaction[];
    createdAt: Date;
}