import bcrypt from "bcryptjs";

interface UserSeed {
  supabaseId: string;
  email: string;
  password?: string;
  username: string;
  name?: string;
  avatar?: string;
  country?: string;
  credits: number;
}

interface BinSeed {
  slug: string;
  title: string;
  description?: string;
  content: any;
  isPublic: boolean;
  tags: string[];
  authorId: string;
}

interface SeedData {
  users: UserSeed[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Fernando Ortiz",
      credits: 5,
      email: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
      username: "fernando.ortiz",
      supabaseId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      password: bcrypt.hashSync("123456", 10),
    },
  ],
};
