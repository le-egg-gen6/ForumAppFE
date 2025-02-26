import { Button } from "@/components/ui/button";
import { Reaction, reactionEmojis } from "@/shared/Reaction";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

interface ReactionPopoverProps {
  onReact: (type: Reaction["type"]) => void;
  triggerText?: string;
}

export const ReactionPopover: React.FC<ReactionPopoverProps> = ({
  onReact,
  triggerText = "Like",
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 transition-colors"
        >
          {triggerText}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex space-x-2 p-2">
        {Object.entries(reactionEmojis).map(([type, emoji]) => (
          <Button
            key={type}
            variant="ghost"
            className="text-2xl p-2 hover:bg-gray-100 rounded-full"
            onClick={() => onReact(type as Reaction["type"])}
          >
            {emoji}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
