import { Button } from "@/components/ui/button";
import Image from "next/image";
import Categories from "./_components/categories";
import TopArticles from "./_components/top-articles";
import TopStories from "./_components/top-stories";
import Advertisements from "./_components/advertisements";

export default function Home() {
  return (
    <main className="bg-background px-2 md:pl-8 xl:pl-20 pt-10 pb-10">
      <div>
        <div>
          <h1 className="font-bold text-2xl">Hello Admin,</h1>
          <p className="text-xs text-muted-foreground">
            This is what we got you for today
          </p>
        </div>
        <div className="flex flex-col gap-x-10">
          <Categories />
          <TopArticles />
          <TopStories/>
          <Advertisements />
        </div>
      </div>
    </main>
  );
}
