import type React from "react";
import {
  ThumbsUp,
  Heart,
  Laugh,
  PartyPopper,
  Frown,
  Angry,
} from "lucide-react";

export const reactionIcons = {
  like: { icon: ThumbsUp, color: "#2563eb" }, // Blue
  love: { icon: Heart, color: "#dc2626" }, // Red
  haha: { icon: Laugh, color: "#fbbf24" }, // Yellow
  wow: { icon: PartyPopper, color: "#7c3aed" }, // Purple
  sad: { icon: Frown, color: "#fbbf24" }, // Yellow
  angry: { icon: Angry, color: "#dc2626" }, // Red
};

interface ReactionIconProps {
  type: keyof typeof reactionIcons;
  className?: string;
}

export const ReactionIcon: React.FC<ReactionIconProps> = ({
  type,
  className,
}) => {
  const { icon: Icon, color } = reactionIcons[type];
  return <Icon className={className} style={{ color }} />;
};
