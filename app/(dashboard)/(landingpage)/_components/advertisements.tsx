import { advertisements } from "@/lib/data";
import Advertisement from "./advertisement";

const Advertisements = () => {
  return (
    <div>
      <div className="flex items-center py-5 justify-between">
        <h2 className="text-xl font-semibold">Advertisements</h2>
        <span className="text-purple-600 font-medium cursor-pointer">
          See all
        </span>
      </div>
      <div className="flex gap-x-4 overflow-auto">
        {advertisements.map((item) => (
          <Advertisement
            key={item.id}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
