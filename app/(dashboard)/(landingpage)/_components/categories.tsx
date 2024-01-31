import { categorieItems } from "@/lib/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Categories = () => {
  return (
    <div className="flex items-center gap-x-2 overflow-auto flex-nowrap pt-10">
      {categorieItems.map((item) => (
        <div>
          <Card className="pt-4 w-min-[150px] flex hover:shadow-md cursor-pointer">
            <CardContent className="flex items-center">
              <div className="flex h-full items-center gap-x-2">
                <item.icon className="p-3 bg-purple-500/10 rounded-full" size={45}/>
                <div>
                  <h3 className="font-semibold text-lg sm:text-base">{item.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {item.noOfUpdates} new updates
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Categories;
