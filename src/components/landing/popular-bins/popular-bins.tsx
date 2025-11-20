import { PopularBinItem } from "./popular-bin-item";

export const PopularBins = () => {
  return (
    <div className="my-56">
      <div className="text-center mb-32">
        <h2 className="text-5xl font-medium">Popular bins</h2>
        <p className="mt-2 text-2xl font-light">
          Look what our community has done
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <PopularBinItem />
        <PopularBinItem />
        <PopularBinItem />
      </div>
    </div>
  );
};
