"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut } from "lucide-react";
import Navitems from "./Navitems";

const UserDropdown = () => {
  const router = useRouter();
  const handleSignOut = () => {
  router.push('/sign-in');
};
  const user = {
    name: "bunny",
    email: "bunny@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="
            flex items-center gap-2
            p-0
            bg-transparent
            hover:bg-transparent
            active:bg-transparent
            focus:bg-transparent
            data-[state=open]:bg-transparent
            data-[state=open]:hover:bg-transparent
            border-none
            shadow-none
            outline-none
            focus-visible:ring-0
            focus-visible:outline-none
          "
        >
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://wallpapers.com/images/file/spider-man-pictures-co7sktzwo1uo0h93.jpg"
              alt="user"
            />

            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>

          <span className="hidden md:block text-sm text-gray-300">
            {user.name}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-56
          rounded-xl
          border border-zinc-800
          bg-zinc-900
          p-3
          text-white
        "
      >
        <DropdownMenuLabel>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://wallpapers.com/images/file/spider-man-pictures-co7sktzwo1uo0h93.jpg"
                alt="user"
              />

              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="text-sm font-semibold">{user.name}</span>

              <span className="text-xs text-gray-400">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600"/>
        <DropdownMenuItem onClick={handleSignOut} className="text-gray-200 text-md font-medium focus:bg-transparent focus:text-yellow-500 transitions-colors cursor-pointer">
            <LogOut className='h-4 w-4 mr-2 hidden sm:block'/>
            LogOut
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
        <nav className="sm:hidden">
            <Navitems/>
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
