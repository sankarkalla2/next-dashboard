import { topArticles } from "@/lib/data";
import Article from "./article";

const TopArticles = () => {
  return (
    <div className="pt-8">
      <div className="flex w-full items-center justify-between pb-5">
        <h2 className="text-xl font-semibold">Top Articles</h2>
        <span className="text-purple-600 cursor-pointer font-medium">
          See all
        </span>
      </div>
      <div className="flex flex-nowrap gap-x-3 overflow-auto">
        {topArticles.map((item) => (
          <Article data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default TopArticles;
