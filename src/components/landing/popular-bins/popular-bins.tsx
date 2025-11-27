import { getPopularBins } from "@/actions";
import { PopularBinItem } from "./popular-bin-item";

export const PopularBins = async () => {
  const popularBins = await getPopularBins(3);

  return (
    <div className="my-48">
      <div className="text-center mb-24 md:mb-32">
        <h2 className="text-5xl font-medium">Popular bins</h2>
        <p className="mt-2 text-2xl font-light">
          Look what our community has done
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {popularBins?.map((bin) => (
          <PopularBinItem key={bin.id} bin={bin} />
        ))}
      </div>
    </div>
  );
};
