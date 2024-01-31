"use client";

import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          className="flex justify-between font-base sm:gap-x-4 lg:gap-x-6 px-1"
        >
          <div className="flex items-center gap-x-1">
            <Avatar className="w-8 h-8">
              <AvatarImage></AvatarImage>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col">
              <p className="text-xs text-muted-foreground">welcome Back,</p>
              <h3 className="text-sm">Sankar Kalla</h3>
            </div>
          </div>
          <CaretSortIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>User Managment</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
