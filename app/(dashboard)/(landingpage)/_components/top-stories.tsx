import { topStories } from "@/lib/data";
import Story from "./story";

const TopStories = () => {
  return (
    <div className="pt-8">
      <div className="flex w-full justify-between items-center font-medium cursor-pointer pb-5">
        <h2 className="text-xl font-semibold">Top Stories</h2>
        <span className="text-purple-600">See all</span>
      </div>
      <div className="gap-x-4 flex overflow-auto flex-nowrap w-full">
        {topStories.map((item) => (
          <Story data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default TopStories;
