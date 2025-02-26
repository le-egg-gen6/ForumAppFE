export interface Reaction {
  type: "like" | "love" | "haha" | "wow" | "sad" | "angry";
  count: number;
}

export const reactionEmojis : Record<string, string> = {
  like: "👍",
  love: "❤️",
  haha: "😆",
  wow: "😮",
  sad: "😢",
  angry: "😠",
};