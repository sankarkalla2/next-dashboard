import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTopStoriesById } from "@/lib/stories-service";
import Image from "next/image";

const StoryPagination = ({ id }: { id: string }) => {
  const story = getTopStoriesById(id);
  return (
    <Carousel>
      <CarouselContent className="h-[550px] w-[400px] shadow-sm bg-transparent">
        {story.showCaseImgs.map((item) => (
          <CarouselItem className="relative" key={item}>
            <Image
              src={item}
              width={400}
              height={400}
              alt="image"
              className="h-full object-cover rounded-md bg-transparent"
            />

            <div className="absolute bottom-5 left-10 right-1 text-white flex-col gap-y-1">
              <h1 className="text-2xl">{story.title}</h1>
              <Button className="uppercase bg-purple-200/50 h-8 hover:bg-purple-100 text-purple-500">
                {story.category}
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default StoryPagination;
