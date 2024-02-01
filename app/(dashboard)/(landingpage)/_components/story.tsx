"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ViewGridIcon, ViewHorizontalIcon } from "@radix-ui/react-icons";
import { FileIcon, FileImage, FileX2Icon, View, ViewIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StoryProps {
  data: {
    title: string;
    category: string;
    views: string;
    date: string;
    imgUrl: string;
    status: string;
    id: string;
  };
}
const Story = ({ data }: StoryProps) => {
  return (
    <div className="min-w-[230px] p-0 h-full">
      <div className="relative">
        <div className="relative h-[300px] bg-opacity-0">
          <Image
            src={data.imgUrl}
            width={250}
            height={300}
            alt="story"
            className="rounded-md h-full bg-opacity-0"
          />
        </div>
        <div className="absolute top-2 right-2 flex gap-x-2 items-center text-sm">
          <p className="py-1 px-2 flex items-center bg-[#fff] rounded-md text-xs gap-x-1 text-purple-700 font-bold">
            <ViewIcon className="w-3 h-3" />
            {data.views}
          </p>
          <div className="px-2 py-1 bg-[#fff] rounded-md text-purple-600">
            <FileImage className="w-4 h-4" />
          </div>
        </div>
        <div className="absolute bottom-2 left-0 right-1 text-white flex flex-col gap-y-1">
          <p className="font-semibold text-sm black">{data.title}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <p className="text-xs font-bold uppercase">{data.category}</p>
              <p className="text-xs text-muted">{data.date}</p>
            </div>
            <p className="text-xs py-1 h-7 px-2 bg-purple-100 rounded-md text-emerald-600 font-semibold justify-end">
              {data.status}
            </p>
          </div>
          <div className="flex gap-x-2">
            <Link href={`/content/${data.id}`} className="w-full">
              <Button className="bg-[#E8E9FF] w-full grid-cols-8 text-purple-600 hover:bg-purple-500/50">
                Views
              </Button>
            </Link>
            <Button className="grid-cols-2 bg-[#FAFAFA] text-purple-600 pb-4 hover:bg-purple-600/10">
              ...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
