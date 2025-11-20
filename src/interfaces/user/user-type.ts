import { Bin } from "../bin/bin-type";
import { Fork } from "../fork/fork-type";

enum Provider {
  google = "google",
  github = "github",
}

export interface User {
  id: string;
  supabaseId: string;
  email: string;
  password: string | null;
  username: string;
  name: string | null;
  avatar: string | null;
  country: string | null;
  credits: string | null;
  createdAt: Date;
  updatedAt: Date;

  // Relaciones
  bins: Bin[];
  forks: Fork[];
  accounts: Account[];
}

export interface Account {
  id: string;
  userId: string;
  provider: Provider;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;

  user: User;
}
