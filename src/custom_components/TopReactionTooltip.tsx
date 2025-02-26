import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Reaction, reactionEmojis } from "@/shared/Reaction";

interface TopReactionTooltipProps {
  reactions: Reaction[];
}

const TopReactionTooltip: React.FC<TopReactionTooltipProps> = ({
  reactions,
}) => {
  const topReactions = reactions.sort((a, b) => b.count - a.count).slice(0, 3);
  const totalReaction = reactions.reduce(
    (acc, reaction) => acc + reaction.count,
    0
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-1 cursor-pointer">
            {topReactions.map((reaction) => (
              <span key={reaction.type} className="text-lg">
                {reactionEmojis[reaction.type]}
              </span>
            ))}
            {totalReaction > 0 && (
              <span className="text-sm text-gray-500 ml-1">
                {totalReaction}
              </span>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-white p-2 rounded-md shadow-lg">
          <div className="flex flex-col space-y-1">
            {reactions.map((reaction) => (
              <div key={reaction.type} className="flex items-center space-x-2">
                <span className="text-lg">{reactionEmojis[reaction.type]}</span>
                <span className="text-sm">{reaction.type}</span>
                <span className="text-sm text-gray-500">
                  ({reaction.count})
                </span>
              </div>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TopReactionTooltip;
