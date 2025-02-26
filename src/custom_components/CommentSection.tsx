import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Comment } from "@/shared/Comment";
import type React from "react";
import { ReactionPopover } from "./ReactionPopover";
import TopReactionTooltip from "./TopReactionTooltip";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="mt-4 space-y-4">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="flex space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={comment.author.avatarUrl}
                alt={comment.author.username}
              />
              <AvatarFallback>
                {comment.author.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="bg-gray-100 rounded-lg p-3 inline-block">
                <p className="font-semibold text-sm">
                  {comment.author.username}
                </p>
                <p className="text-sm">{comment.text}</p>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{new Date(comment.timestamp).toLocaleString()}</span>
                <ReactionPopover
                  onReact={(type) =>
                    console.log(`Reacted to comment with ${type}`)
                  }
                  triggerText="React"
                />
                <TopReactionTooltip reactions={comment.reactions} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
