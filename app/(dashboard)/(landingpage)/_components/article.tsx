"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

interface ArticleProps {
  data: {
    category: string;
    Date: string;
    author: string;
    title: string;
    description: string;
    tags: string[];
    status: string;
    imgUrl: string;
  };
}
const Article = ({ data }: ArticleProps) => {
  const [mouted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mouted) return null;

  return (
    <Card className="min-w-[260px] pt-3 cursor-pointer hover:shadow-lg">
      <CardContent className="px-3 flex flex-col gap-y-1">
        <div className="aspect-video relative">
          <Image src={data.imgUrl} fill alt="article" className="rounded-md " />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <h4 className="text-xs uppercase text-purple-500 font-bold">
              {data.category}
            </h4>
            <p className="text-xs text-muted-foreground truncate">
              {data.Date}
            </p>
          </div>
          <p className="flex gap-x-1 items-center">
            <Avatar className="w-6 h-6 p-1 text-xs rounded-full">
              <AvatarImage
                src="/advertisements/pexels-artem-podrez-5726837.jpg"
                className="rounded-full object-cover"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-sm font-semibold text-muted-foreground">
              {data.author}
            </p>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-base">{data.title}</h3>
          <Button
            className="bg-purple-500/5 text-purple-500 hover:bg-purple-500/5 px-2 text-xs py-1 h-8"
            size="sm"
          >
            {data.status}
          </Button>
        </div>
        <div className="flex gap-x-2 overflow-hidden">
          {data.tags &&
            data.tags.map((tag) => (
              <Button
                key={tag}
                className="px-2 py-1 h-8 text-xs bg-slate-500/10 text-black text-muted-foreground hover:bg-slate-500/10"
              >
                {tag}
              </Button>
            ))}
        </div>
        <div className="flex gap-x-2">
          <Button className="bg-purple-700/10 w-full grid-cols-8 text-purple-600 hover:bg-purple-500/50">
            View
          </Button>
          <Button className="grid-cols-2 bg-purple-500/5 text-purple-600 pb-4 hover:bg-purple-600/10">
            ...
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Article;
