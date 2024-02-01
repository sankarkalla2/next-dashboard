import { getTopStoriesById } from "@/lib/stories-service";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SelectIem from "../_components/select-item";
import StoryPagination from "../_components/story-pagination";

interface ContentPageProps {
  params: {
    id: string;
  };
}
const ContentPage = ({ params }: ContentPageProps) => {
  const story = getTopStoriesById(params.id);

  return (
    <div className="p-2 md:px-8 lg:px-20 pt-10 overflow-hidden">
      <div className="flex items-center justify-between pb-10">
        <div className="flex items-center gap-x-2">
          <div className="relative h-6 w-6">
            <Image
              src={"/advertisements/pexels-google-deepmind-17483848.jpg"}
              fill
              alt="img"
              className="rounded-full object-cover"
            />
          </div>
          <h4 className="font-semibold text-muted-foreground">
            {story.author}
          </h4>
          <p className="text-sm text-blue-400">Created on {story.date}</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <SelectIem />
          <Button className="bg-slate-100 h-8 hover:bg-slate-200 text-purple-800 font-bold pb-4 ">
            ...
          </Button>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden h-[550px]">
          <Image
            src={"/top-articles/pexels-anna-nekrashevich-6802042.jpg"}
            fill
            alt="bg-img"
            className="object-cover blur-sm"
          />
          <div className="absolute translate-x-[-50%] left-[50%] top-[50%] translate-y-[-50%]">
            <StoryPagination id={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
