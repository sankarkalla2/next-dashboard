"use client";
import { Input } from "@/components/ui/input";
import { DatePickerWithRange } from "./date-range-picker";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "./user-button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [mounted]);

  if (!mounted) return null;
  return (
    <div className="lg:pl-64 w-full top-0 fixed h-[70px] bg-white px-3">
      <div className="flex gap-x-3 items-center h-full">
        <Button className="lg:hidden" variant="outline" size="sm">
          <MenuIcon className="" />
        </Button>
        <div className="w-full bg-slate-50 rounded-md flex items-center pl-4">
          <SearchIcon className="text-muted-foreground" size={18} />
          <Input placeholder="Search..." className="border-none" />
        </div>
        <DatePickerWithRange className="hidden md:flex" />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
