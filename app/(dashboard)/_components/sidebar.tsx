"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

import { dashBoardRoutes } from "@/lib/data";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-60 fixed h-full pt-[70px] bg-[#ffffff] border-r-2 border-slate-100">
      <div className="w-full px-6 flex flex-col gap-y-2">
        {dashBoardRoutes &&
          dashBoardRoutes.map((route) => (
            <Button
              className={cn(
                "flex items-center w-full gap-x-2 text-sm",
                route.href === pathname && "bg-[#9058FF]  text-white"
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
    </aside>
  );
};

export default Sidebar;