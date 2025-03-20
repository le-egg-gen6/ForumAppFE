import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bookmark,
  Calendar,
  ChevronDown,
  Clock,
  Flag,
  Gamepad,
  Heart,
  ShoppingBag,
  Star,
  Users,
} from "lucide-react";

// Sample data for shortcuts
const shortcuts = [
  { id: 1, name: "Friends", icon: Users },
  { id: 2, name: "Saved", icon: Bookmark },
  { id: 3, name: "Marketplace", icon: ShoppingBag },
  { id: 4, name: "Events", icon: Calendar },
  { id: 5, name: "Memories", icon: Clock },
  { id: 6, name: "Pages", icon: Flag },
  { id: 7, name: "Gaming", icon: Gamepad },
  { id: 8, name: "Fundraisers", icon: Heart },
];

// Sample data for groups
const groups = [
  {
    id: 1,
    name: "Web Development Group",
    avatar: "/placeholder.svg?height=40&width=40&text=WD",
  },
  {
    id: 2,
    name: "Travel Enthusiasts",
    avatar: "/placeholder.svg?height=40&width=40&text=TE",
  },
  {
    id: 3,
    name: "Food Lovers",
    avatar: "/placeholder.svg?height=40&width=40&text=FL",
  },
  {
    id: 4,
    name: "Photography Club",
    avatar: "/placeholder.svg?height=40&width=40&text=PC",
  },
  {
    id: 5,
    name: "Book Readers",
    avatar: "/placeholder.svg?height=40&width=40&text=BR",
  },
];

const LeftSidebar = () => {
  return (
    <div className="hidden w-[320px] flex-shrink-0 border-r bg-white lg:block">
      <ScrollArea className="h-full px-4 py-4">
        <div className="space-y-6">
          {/* User Profile Shortcut */}
          <div className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="User"
              />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Your Name</span>
          </div>

          {/* Navigation Shortcuts */}
          <div className="space-y-1">
            {shortcuts.map((shortcut) => (
              <div className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100">
                <shortcut.icon className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">{shortcut.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100">
              <ChevronDown className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">See more</span>
            </div>
          </div>

          {/* Groups */}
          <div>
            <div className="mb-2 flex items-center justify-between px-2">
              <h3 className="text-base font-semibold text-gray-500">
                Your groups
              </h3>
              <div className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100">
                <span className="text-sm font-medium">See all</span>
              </div>
            </div>
            <div className="space-y-1">
              {groups.map((group) => (
                <div className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={group.avatar} alt={group.name} />
                    <AvatarFallback>
                      {group.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{group.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsored/Ads Section */}
          <div>
            <h3 className="mb-2 px-2 text-base font-semibold text-gray-500">
              Sponsored
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Star className="h-8 w-8" />
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium">Premium Subscription</p>
                  <p className="text-xs text-gray-500">example.com</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium">Summer Sale - 50% Off</p>
                  <p className="text-xs text-gray-500">shop.example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="pt-2">
            <p className="px-2 text-xs text-gray-500">
              Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta
              © 2023
            </p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;
