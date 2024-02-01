"use client";
import { Input } from "@/components/ui/input";
import { DatePickerWithRange } from "./date-range-picker";
import { ArrowBigDown, ArrowBigLeft, MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "./user-button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuSideBar from "./sidebar-menu";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [mounted]);

  if (!mounted) return null;
  return (
    <div className="lg:pl-64 w-full top-0 fixed h-[70px] bg-white px-3 flex items-center justify-between z-50">
      <div className="flex gap-x-3 items-center h-full">
        <MenuSideBar />
        {pathname === "/" && (
          <div className="w-full xl:w-[600px] min-w-[300px] bg-slate-50 rounded-md flex items-center pl-4">
            <SearchIcon className="text-muted-foreground" size={18} />
            <Input placeholder="Search..." className="border-none w-full" />
          </div>
        )}
        {pathname !== "/" && (
          <div className="capitalize font-medium text-2xl flex items-center gap-x-2">
            <Link href="/" className="">
              <Button size="sm" variant="outline">
                <ArrowBigLeft className="w-4 h-4"/>
              </Button>
            </Link>
            {pathname.split("/")[1]}
          </div>
        )}
      </div>
      <div className="flex items-center gap-x-2">
        <DatePickerWithRange className="hidden md:flex" />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
