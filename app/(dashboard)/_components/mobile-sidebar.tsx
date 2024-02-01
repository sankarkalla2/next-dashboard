"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

import { dashBoardRoutes } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Contact2 } from "lucide-react";
import { DatePickerWithRange } from "./date-range-picker";

const MobileSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="">
      <div className="w-full px-4 flex flex-col gap-y-1">
        {dashBoardRoutes &&
          dashBoardRoutes.map((route) => (
            <Button
              className={cn(
                "flex items-center w-full gap-x-2 text-sm h-12",
                route.href === pathname && "bg-[#9058FF] text-white",
                pathname.includes(route.href) &&
                  route.href !== "/" &&
                  "bg-[#9058FF]  text-white"
              )}
              variant="ghost"
              key={route.href}
            >
              <Link
                href={route.href}
                className="w-full flex items-center gap-x-2"
              >
                <route.icon size={18} />
                <p className="text-sm">{route.label}</p>
                {route.notifications !== 0 && (
                  <Badge>{route.notifications}</Badge>
                )}
              </Link>
            </Button>
          ))}
      </div>
      <div className="px-4 pt-20 flex flex-col gap-y-5">
        <DatePickerWithRange />
        <Button className="w-full flex gap-x-2 justify-start bg-[#F8FAFB] text-black hover:bg-[#F8FAFB] hover:shadow-sm">
          <Contact2 />
          Contact Support
        </Button>
      </div>
    </aside>
  );
};

export default MobileSidebar;
