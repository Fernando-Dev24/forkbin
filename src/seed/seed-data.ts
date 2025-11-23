import bcrypt from "bcryptjs";
import { Provider } from "../generated/prisma/enums";

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
  isMockApi: boolean;
  tags: string[];
  authorId: string;
  forksCount: number;
}

interface AccountSeed {
  userId: string;
  provider: Provider; // "github" | "google" | 'email'
  providerAccountId: string; // ID del usuario en GitHub/Google (ej: 12345678)
}

interface SeedData {
  users: UserSeed[];
  account: AccountSeed;
  bins: BinSeed[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Fernando Ortiz",
      email: "refer@gmail.com",
      username: "fernando.ortiz",
      supabaseId: "12345666778",
      password: bcrypt.hashSync("123456", 10),
    },
  ],
  account: {
    userId: "",
    provider: Provider.email,
    providerAccountId: "12345666778",
  },
  bins: [
    {
      title: "GitHub Users API",
      description: "Mock completo de usuarios GitHub",
      slug: "mock/github-users",
      isMockApi: true,
      isPublic: true,
      tags: ["github", "mock", "popular"],
      forksCount: 2847,
      content: {
        GET: {
          200: {
            "/users/octocat": {
              login: "octocat",
              id: 583231,
              name: "The Octocat",
              bio: "GitHub's mascot",
              public_repos: 8,
              followers: 12345,
              avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
              location: "San Francisco",
            },
          },
          404: { message: "User not found" },
        },
      },
      authorId: "",
    },
    {
      title: "Stripe Checkout Sessions",
      description: "Simula creación de sesiones de pago",
      slug: "mock/stripe-sessions",
      isMockApi: true,
      isPublic: true,
      tags: ["stripe", "payments", "mock"],
      forksCount: 2156,
      content: {
        POST: {
          200: {
            "/v1/checkout/sessions": {
              id: "cs_test_a1b2c3d4e5",
              object: "checkout.session",
              payment_status: "paid",
              amount_total: 499900,
              currency: "usd",
              customer_email: "test@example.com",
              status: "complete",
            },
          },
          402: {
            error: { type: "card_error", message: "Your card was declined." },
          },
        },
      },
      authorId: "",
    },
    {
      title: "OpenWeather Current",
      description: "Clima actual por ciudad",
      slug: "mock/weather-current",
      isMockApi: true,
      isPublic: true,
      tags: ["weather", "api"],
      forksCount: 1892,
      content: {
        GET: {
          200: {
            "/weather": {
              coord: { lon: 2.1734, lat: 41.3851 },
              weather: [{ main: "Clear", description: "cielo claro" }],
              main: { temp: 22.5, feels_like: 21.8, humidity: 65 },
              name: "Barcelona",
              sys: { country: "ES", sunrise: 1739512345, sunset: 1739556789 },
            },
          },
        },
      },
      authorId: "",
    },
    {
      title: "JSONPlaceholder Todos",
      description: "Clásico endpoint de tareas",
      slug: "mock/todos",
      isMockApi: true,
      isPublic: true,
      tags: ["classic", "todos"],
      forksCount: 1673,
      content: {
        GET: {
          200: {
            "/todos": [
              { userId: 1, id: 1, title: "Lanzar Forkbin", completed: true },
              { userId: 1, id: 2, title: "Aprender Rust", completed: false },
              {
                userId: 1,
                id: 3,
                title: "Escribir 10 artículos",
                completed: false,
              },
            ],
          },
        },
      },
      authorId: "",
    },
    {
      title: "Fake Store API",
      description: "Productos de tienda falsa",
      slug: "mock/fakestore",
      isMockApi: true,
      isPublic: true,
      tags: ["ecommerce", "products"],
      forksCount: 1432,
      content: {
        GET: {
          200: {
            "/products": [
              {
                id: 1,
                title: "Fjallraven Backpack",
                price: 109.95,
                category: "bags",
                image:
                  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              },
              {
                id: 2,
                title: "Mens Cotton Jacket",
                price: 55.99,
                category: "clothing",
                rating: { rate: 4.7, count: 500 },
              },
            ],
          },
        },
      },
      authorId: "",
    },
    {
      title: "Discord Webhooks Mock",
      description: "Envío de mensajes a Discord",
      slug: "mock/discord-webhook",
      isMockApi: true,
      isPublic: true,
      tags: ["discord", "webhook"],
      forksCount: 987,
      content: {
        POST: {
          204: "No Content - Mensaje enviado",
          400: { message: "Missing message content" },
        },
      },
      authorId: "",
    },
    {
      title: "Spotify Currently Playing",
      description: "Simula lo que estás escuchando",
      slug: "mock/spotify-playing",
      isMockApi: true,
      isPublic: true,
      tags: ["spotify", "music"],
      forksCount: 854,
      content: {
        GET: {
          200: {
            "/me/player/currently-playing": {
              is_playing: true,
              item: {
                name: "Blinding Lights",
                artists: [{ name: "The Weeknd" }],
                album: {
                  name: "After Hours",
                  images: [
                    {
                      url: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
                    },
                  ],
                },
              },
              progress_ms: 145000,
            },
          },
        },
      },
      authorId: "",
    },
    {
      title: "Mi perfil de dev",
      description: "Datos personales + skills + links",
      slug: "profile/alexdev",
      isMockApi: false,
      isPublic: true,
      tags: ["profile", "portfolio"],
      forksCount: 892,
      content: {
        name: "Alex Rivera",
        role: "Fullstack Indie Maker",
        location: "Buenos Aires, Argentina",
        bio: "Construyo Forkbin y ayudo a devs a crear APIs en segundos",
        social: {
          twitter: "https://twitter.com/alexforkbin",
          github: "https://github.com/alexdev",
          linkedin: "https://linkedin.com/in/alexdev",
        },
        stack: [
          "Next.js",
          "TypeScript",
          "Prisma",
          "Tailwind",
          "PostgreSQL",
          "Docker",
        ],
        currentlyBuilding: "Forkbin v2",
      },
      authorId: "",
    },
    {
      title: "Configuración VS Code",
      description: "Mi setup perfecto de editor",
      slug: "config/vscode-setup",
      isMockApi: false,
      isPublic: true,
      tags: ["vscode", "config"],
      forksCount: 756,
      content: {
        theme: "Dracula PRO",
        font: "Fira Code",
        fontSize: 14,
        ligatures: true,
        tabSize: 2,
        extensions: [
          "Prisma.prisma",
          "esbenp.prettier-vscode",
          "bradlc.vscode-tailwindcss",
          "dbaeumer.vscode-eslint",
          "ms-vscode.live-server",
        ],
        settings: {
          "editor.minimap.enabled": false,
          "workbench.iconTheme": "material-icon-theme",
        },
      },
      authorId: "",
    },
    {
      title: "Roadmap 2025",
      description: "Mis metas técnicas del año",
      slug: "goals/roadmap-2025",
      isMockApi: false,
      isPublic: true,
      tags: ["goals", "personal"],
      forksCount: 623,
      content: {
        q1: [
          "Lanzar Forkbin MVP",
          "Llegar a 1000 usuarios",
          "Escribir 12 artículos",
        ],
        q2: ["Monetización con créditos", "Soporte para GraphQL"],
        q3: ["Forkbin Pro (equipos)", "App móvil"],
        q4: ["Hablar en Next.js Conf", "1M en revenue"],
      },
      authorId: "",
    },
    {
      title: "Paleta de colores Forkbin",
      description: "Colores oficiales del proyecto",
      slug: "design/palette",
      isMockApi: false,
      isPublic: true,
      tags: ["design", "colors"],
      forksCount: 487,
      content: {
        primary: "#615FFF",
        success: "#00A88B",
        background: "#0F0F0F",
        card: "#171717",
        foreground: "#F9FAFB",
        muted: "#94A3B8",
        border: "#2A2725",
      },
      authorId: "",
    },
    {
      title: "Snippets Tailwind favoritos",
      description: "Clases que uso todos los días",
      slug: "snippets/tailwind",
      isMockApi: false,
      isPublic: true,
      tags: ["tailwind", "snippets"],
      forksCount: 412,
      content: {
        glassCard: "bg-white/10 backdrop-blur-lg border border-white/20",
        hoverLift:
          "hover:scale-105 hover:shadow-2xl transition-all duration-300",
        gradientText:
          "bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent",
        neonBorder:
          "border-2 border-purple-500/50 shadow-lg shadow-purple-500/30",
      },
      authorId: "",
    },
    {
      title: "Mis comandos favoritos",
      description: "Terminal aliases y shortcuts",
      slug: "cli/commands",
      isMockApi: false,
      isPublic: true,
      tags: ["cli", "terminal"],
      forksCount: 298,
      content: {
        aliases: {
          gs: "git status",
          gc: "git commit -m",
          gp: "git push",
          nr: "npm run",
          nd: "npm run dev",
          nb: "npm run build",
        },
        shortcuts: {
          clear: "clear && neofetch",
          update: "sudo apt update && sudo apt upgrade -y",
        },
      },
      authorId: "",
    },
  ],
};
