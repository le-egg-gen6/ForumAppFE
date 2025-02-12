import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactionIcon } from "@/custom_components/reactions/ReactionIcons";
import type { Reaction } from "@/shared/Reaction";
import type React from "react"; // Added import for React

interface ReactionSummaryProps {
  reactions: Reaction[];
}

export const ReactionSummary: React.FC<ReactionSummaryProps> = ({
  reactions,
}) => {
  const totalReactions = reactions.reduce(
    (sum, reaction) => sum + reaction.count,
    0
  );
  const topReactions = reactions
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-1 cursor-pointer">
            {topReactions.map((reaction) => (
              <ReactionIcon
                key={reaction.type}
                type={reaction.type}
                className="w-4 h-4"
              />
            ))}
            <span className="text-xs text-muted-foreground">
              {totalReactions}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-xs space-y-1">
            {reactions.map(
              (reaction) =>
                reaction.count > 0 && (
                  <div
                    key={reaction.type}
                    className="flex items-center space-x-2"
                  >
                    <ReactionIcon type={reaction.type} className="w-4 h-4" />
                    <span>{reaction.count}</span>
                  </div>
                )
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
