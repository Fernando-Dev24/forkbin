import { User } from "../user/user-type";

export interface Bin {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  content: BinContentType; // esto es solo que lo que devolvera la API publica
  isPublic: boolean;
  tags: string[];

  // Árbol de forks
  forkedFromId: string | null; // si es null, este nunca ha sido forkeado
  forkedFrom: string | null; // si es null, este nunca ha sido forkeado
  forks: []; // si esta vacio, quiere decir que este nunca ha sido forkeado

  // Contadores (rápidos para Community / Trending)
  forksCount: number; // cuántas veces fue forkeado
  viewsCount: number; // cuántas visitas

  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: User;

  // Relaciones extras
  forkRecords: []; // quién y cuándo lo forkeó
}

export type BinContentType = Record<string, any>;
