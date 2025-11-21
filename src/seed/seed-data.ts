import bcrypt from "bcryptjs";

interface UserSeed {
  supabaseId: string;
  email: string;
  password?: string;
  username: string;
  name?: string;
  avatar?: string;
  country?: string;
}

interface BinSeed {
  slug: string;
  title: string;
  description?: string;
  content: any;
  isPublic: boolean;
  tags: string[];
  authorId: string;
  forksCount: number;
}

interface SeedData {
  users: UserSeed[];
  bins: BinSeed[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Fernando Ortiz",
      email: "refer@gmail.com",
      username: "fernando.ortiz",
      supabaseId: "12345666778",
      // password: bcrypt.hashSync("123456", 10),
    },
  ],
  bins: [
    {
      title: "GitHub API v3",
      description: "Mock completo de la API pública de GitHub",
      slug: "github/api-v3",
      content: {
        GET: {
          200: {
            "/users/{username}": {
              login: "octocat",
              id: 583231,
              avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
              name: "The Octocat",
              company: "@github",
              location: "San Francisco",
              public_repos: 8,
              followers: 12345,
              following: 9,
            },
          },
        },
      },
      tags: ["github", "popular", "official"],
      isPublic: true,
      forksCount: 20,
      authorId: "",
    },
    {
      title: "JSON Placeholder",
      description: "El clásico fake API que todos aman",
      slug: "typicode/json-placeholder",
      content: {
        GET: {
          200: {
            "/posts": [
              { id: 1, title: "sunt aut facere...", userId: 1 },
              { id: 2, title: "qui est esse", userId: 1 },
            ],
            "/posts/1": {
              id: 1,
              title: "Primer post",
              body: "lorem ipsum...",
              userId: 1,
            },
          },
        },
      },
      tags: ["classic", "testing", "json"],
      isPublic: true,
      forksCount: 50,
      authorId: "",
    },
    {
      title: "E-commerce API",
      description: "Productos, carrito y checkout simulado",
      slug: "shop/ecommerce-mock",
      content: {
        GET: {
          200: {
            "/products": [
              { id: 1, name: "MacBook Pro", price: 2499, stock: 5 },
              { id: 2, name: "iPhone 15 Pro", price: 1199, stock: 12 },
            ],
            "/products/1": {
              id: 1,
              name: "MacBook Pro",
              price: 2499,
              specs: { ram: "32GB", ssd: "1TB" },
            },
          },
        },
        POST: {
          201: { "/cart": { message: "Producto añadido", cartId: "cart_123" } },
          400: { error: "Producto agotado" },
        },
      },
      tags: ["ecommerce", "shop", "products"],
      isPublic: true,
      forksCount: 30,
      authorId: "",
    },
    {
      title: "Stripe Payment Mock",
      description: "Simula pagos con Stripe (test mode)",
      slug: "stripe/test-payment",
      content: {
        POST: {
          200: {
            "/v1/payment_intents": {
              id: "pi_3Oxxx",
              amount: 2000,
              currency: "usd",
              status: "succeeded",
              client_secret: "pi_xxx_secret_xxx",
            },
          },
          402: {
            error: { type: "card_error", message: "Your card was declined." },
          },
        },
      },
      tags: ["stripe", "payments", "testing"],
      isPublic: true,
      forksCount: 13,
      authorId: "",
    },
    {
      title: "Weather API",
      description: "Clima actual y forecast por ciudad",
      slug: "weather/global-forecast",
      content: {
        GET: {
          200: {
            "/current?city=Tokyo": {
              city: "Tokyo",
              temp: 18,
              feels_like: 17,
              condition: "Partly cloudy",
              humidity: 68,
            },
          },
        },
      },
      tags: ["weather", "open-data"],
      isPublic: true,
      forksCount: 8,
      authorId: "",
    },
    {
      title: "TodoMVC Backend",
      description: "API REST para la famosa app de todos",
      slug: "todomvc/api",
      content: {
        GET: {
          200: {
            "/todos": [{ id: 1, title: "Aprender Next.js", completed: true }],
          },
        },
        POST: { 201: { title: "Deploy Forkbin", completed: false } },
      },
      tags: ["todo", "example", "learning"],
      isPublic: true,
      forksCount: 7,
      authorId: "",
    },
    {
      title: "PokéAPI Mock",
      description: "Pokemons con stats y sprites",
      slug: "pokemon/mocks",
      content: {
        GET: {
          200: {
            "/pokemon/pikachu": {
              name: "pikachu",
              id: 25,
              types: ["electric"],
              sprites: {
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
              },
            },
          },
        },
      },
      tags: ["pokemon", "fun", "gaming"],
      isPublic: true,
      forksCount: 17,
      authorId: "",
    },
  ],
};
