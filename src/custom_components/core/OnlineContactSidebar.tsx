import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

// Sample data for online contacts
const onlineContacts = [
  {
    id: 1,
    name: "Jessica Smith",
    avatar: "/placeholder.svg?height=40&width=40&text=JS",
    status: "active", // active, away, busy
  },
  {
    id: 2,
    name: "Michael Johnson",
    avatar: "/placeholder.svg?height=40&width=40&text=MJ",
    status: "active",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "/placeholder.svg?height=40&width=40&text=ED",
    status: "away",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40&text=DW",
    status: "active",
  },
  {
    id: 5,
    name: "Sarah Brown",
    avatar: "/placeholder.svg?height=40&width=40&text=SB",
    status: "busy",
  },
  {
    id: 6,
    name: "Thomas Anderson",
    avatar: "/placeholder.svg?height=40&width=40&text=TA",
    status: "active",
  },
  {
    id: 7,
    name: "Lisa Martinez",
    avatar: "/placeholder.svg?height=40&width=40&text=LM",
    status: "active",
  },
  {
    id: 8,
    name: "Robert Taylor",
    avatar: "/placeholder.svg?height=40&width=40&text=RT",
    status: "away",
  },
  {
    id: 9,
    name: "Jennifer Garcia",
    avatar: "/placeholder.svg?height=40&width=40&text=JG",
    status: "active",
  },
  {
    id: 10,
    name: "Daniel Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40&text=DR",
    status: "active",
  },
  {
    id: 11,
    name: "Michelle Lewis",
    avatar: "/placeholder.svg?height=40&width=40&text=ML",
    status: "busy",
  },
  {
    id: 12,
    name: "Christopher Lee",
    avatar: "/placeholder.svg?height=40&width=40&text=CL",
    status: "active",
  },
  {
    id: 13,
    name: "Amanda Walker",
    avatar: "/placeholder.svg?height=40&width=40&text=AW",
    status: "active",
  },
  {
    id: 14,
    name: "Kevin Hall",
    avatar: "/placeholder.svg?height=40&width=40&text=KH",
    status: "away",
  },
  {
    id: 15,
    name: "Stephanie Allen",
    avatar: "/placeholder.svg?height=40&width=40&text=SA",
    status: "active",
  },
];

const OnlineContactsSidebar = () => {
  return (
    <div className="hidden w-[320px] flex-shrink-0 border-l bg-white lg:block">
      <div className="flex h-full flex-col">
        <div className="border-b p-4">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Contacts</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search contacts"
              className="h-9 bg-gray-100 pl-10 pr-4"
            />
          </div>
        </div>

        <ScrollArea className="flex-1 px-2 py-2">
          <div className="space-y-1">
            {onlineContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100"
              >
                <div className="relative">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>
                      {contact.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white 
                      ${
                        contact.status === "active"
                          ? "bg-green-500"
                          : contact.status === "away"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                  />
                </div>
                <span className="text-sm font-medium">{contact.name}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default OnlineContactsSidebar;
