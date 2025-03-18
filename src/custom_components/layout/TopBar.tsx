"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Bell,
  Home,
  Menu,
  MessageCircle,
  Search,
  Users,
  Video,
} from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 relative">
        {/* Left section - Logo and Search */}
        <div className="flex items-center w-64">
          <div className="mr-2 flex items-center md:mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="36"
              height="36"
              className="text-blue-600"
            >
              <path
                fill="currentColor"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              />
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              />
            </svg>
          </div>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search Facebook"
              className="h-10 w-64 rounded-full bg-gray-100 pl-10 pr-4"
            />
          </div>
        </div>

        {/* Center section - Navigation (Desktop) */}
        <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 transform md:flex">
          <nav className="flex space-x-1">
            <Button
              variant="ghost"
              className="h-14 rounded-none border-b-2 border-blue-500 px-10 text-blue-500"
            >
              <Home className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="h-14 rounded-none px-10 text-gray-500 hover:bg-gray-100"
            >
              <Video className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="h-14 rounded-none px-10 text-gray-500 hover:bg-gray-100"
            >
              <Users className="h-6 w-6" />
            </Button>
          </nav>
        </div>

        {/* Right section - Icons and Profile */}
        <div className="flex items-center space-x-2 w-64 justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-200 md:hidden"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-200 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Desktop icons */}
          <div className="hidden md:flex md:space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-200"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-200"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-0">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                    />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="grid grid-cols-3 divide-x">
            <Button
              variant="ghost"
              className="flex flex-col items-center py-3 text-blue-500"
            >
              <Home className="mb-1 h-6 w-6" />
              <span className="text-xs">Home</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center py-3 text-gray-500"
            >
              <Video className="mb-1 h-6 w-6" />
              <span className="text-xs">Watch</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center py-3 text-gray-500"
            >
              <Users className="mb-1 h-6 w-6" />
              <span className="text-xs">Groups</span>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TopBar;
