"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import MobileSidebar from "./mobile-sidebar";

const MenuSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="outline" size="sm">
          <MenuIcon className="" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-white pt-10">
        <MobileSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MenuSideBar;
