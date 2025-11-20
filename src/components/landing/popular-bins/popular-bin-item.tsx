import { StarIcon } from "lucide-react";

export const PopularBinItem = () => {
  return (
    <div className="p-10 rounded-xl bg-card">
      <h4>Bin Title</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
        exercitationem consectetur consequuntur magnam fugit illo itaque?
      </p>
      <p>
        <StarIcon />
        24 forks
      </p>
      <p>by @user</p>
    </div>
  );
};
