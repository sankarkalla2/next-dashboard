import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface AdvertisementProps {
  title: string;
  description: string;
  imgUrl: string;
}
const Advertisement = ({ title, description, imgUrl }: AdvertisementProps) => {
  return (
    <Card className="w-[300px]">
      <CardContent className="p-0 flex">
        <div className="relative w-[200px] h-[120px]">
          <Image
            src={imgUrl}
            fill
            alt="advertisement"
            className="rounded-md object-cover"
          />
        </div>
        <div className="p-2 flex flex-col">
          <h1 className="font-semibold">{title}</h1>
          <p className="text-xs text-muted-foreground pb-2">{description}</p>
          <div className="flex gap-x-2">
            <Button className="bg-purple-700/10 w-full grid-cols-8 h-8 text-purple-600 hover:bg-purple-500/50">
              View
            </Button>
            <Button className="grid-cols-2 bg-purple-500/5 text-purple-600 pb-4 h-8 hover:bg-purple-600/10">
              ...
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Advertisement;
