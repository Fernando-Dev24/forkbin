import { Bin } from "../bin/bin-type";
import { User } from "../user/user-type";

export interface Fork {
  id: string;

  binId: string;
  userId: string;
  createdAt: Date;

  // Relaciones
  bin: Bin;
  user: User;
}
