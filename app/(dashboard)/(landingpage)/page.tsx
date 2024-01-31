import { Button } from "@/components/ui/button";
import Image from "next/image";
import Categories from "./_components/categories";

export default function Home() {
  return (
    <main className="bg-background p-2 md:px-8 xl:px-32 pt-10">
      <div>
        <div>
          <h1 className="font-bold text-2xl">Hello Admin,</h1>
          <p className="text-xs text-muted-foreground">
            This is what we got you for today
          </p>
        </div>
        <div className="flex flex-col gap-x-10">
          <Categories />
        </div>
      </div>
    </main>
  );
}
