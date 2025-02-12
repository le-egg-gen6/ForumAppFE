import type React from "react";
import {
  ReactionIcon,
  reactionIcons,
} from "@/custom_components/reactions/ReactionIcons";

interface ReactionListProps {
  onReact: (type: keyof typeof reactionIcons) => void;
}

export const ReactionList: React.FC<ReactionListProps> = ({ onReact }) => (
  <div className="flex space-x-2 bg-white shadow-lg rounded-full p-2">
    {Object.entries(reactionIcons).map(([type]) => (
      <button
        key={type}
        className="hover:scale-125 transition-transform"
        onClick={() => onReact(type as keyof typeof reactionIcons)}
      >
        <ReactionIcon
          type={type as keyof typeof reactionIcons}
          className="w-6 h-6"
        />
      </button>
    ))}
  </div>
);
