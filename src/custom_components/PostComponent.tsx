import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Post } from "@/shared/Post";
import {
  getDifferenceTimeString,
  getDifferrentMillisBetweenTimestamps,
} from "@/utils/date_utils";
import { Avatar } from "@radix-ui/react-avatar";
import TopReactionTooltip from "./TopReactionTooltip";

interface PostProps {
  post: Post;
}

const PostComponent: React.FC<PostProps> = ({ post }) => {
  const differenceMillisFromNow = getDifferrentMillisBetweenTimestamps(
    new Date().toISOString(),
    post.createdAt
  );

  return (
    <Card className="max-w-2xl mx-auto my-8">
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar>
          <AvatarImage src={post.author.avatarUrl} alt={post.author.username} />
          <AvatarFallback>
            {post.author.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <span className="font-semibold text-sm">{post.author.username}</span>
          <span className="text-xs text-muted-foreground">
            {" "}
            • {getDifferenceTimeString(differenceMillisFromNow)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 mg-4">{post.content}</p>
        {post.containImage && post.imageUrl && (
          <img
            src={post.imageUrl || "/placeholder.svg"}
            alt="Post image"
            className="w-full h-auto rounded-lg mb-4"
          />
        )}
        <div className="flex justify-between items-center mt-4">
          <TopReactionTooltip reactions={post.reactions} />
          <div className="text-sm text-gray-500">
            {post.totalComments} comments
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default PostComponent;
