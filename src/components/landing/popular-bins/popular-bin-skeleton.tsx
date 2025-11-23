import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PopularBinsSkeleton = () => {
  return (
    <div className="my-48">
      <div className="text-center mb-24 md:mb-32">
        <h2 className="text-5xl font-medium">Popular bins</h2>
        <p className="mt-2 text-2xl font-light">
          Look what our community has done
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {Array.from([1, 2, 3]).map((item) => (
          <Card className="md:duration-150 animate-pulse" key={item}>
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-8 w-[200px]" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-full" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-[100px]" />
            </CardContent>
            <CardFooter className="flex items-center justify-between text-muted-foreground">
              <Skeleton className="h-4 w-[70px]" />
              <Skeleton className="skeleton-btn" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
