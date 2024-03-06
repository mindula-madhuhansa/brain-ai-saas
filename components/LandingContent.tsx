import { features } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="bg-[#1a2336] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 rounded-md", feature.bgColor)}>
                    <feature.icon className={cn(feature.color)} />
                  </div>
                  <p className="text-lg">{feature.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {feature.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default LandingContent;
