import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
  PrismaClientInitializationError,
} from "@/generated/prisma/internal/prismaNamespace";
import { AuthError } from "@supabase/supabase-js";

type ActionError =
  | PrismaClientKnownRequestError
  | PrismaClientUnknownRequestError
  | PrismaClientValidationError
  | PrismaClientInitializationError
  | AuthError
  | Error
  | unknown;

export const handleActionError = (error: ActionError) => {
  let message = "An unexpected error occurred while processing the request";

  switch (true) {
    case error instanceof PrismaClientKnownRequestError:
      message = `A known request error occurred while processing the request`;
      break;
    case error instanceof PrismaClientUnknownRequestError:
      message = `An unknown request error occurred while processing the request`;
      break;
    case error instanceof PrismaClientValidationError:
      message = `A validation error occurred while processing the request`;
      break;
    case error instanceof PrismaClientInitializationError:
      message = `An initialization error occurred while processing the request`;
      break;
    case error instanceof AuthError:
      message = `An authentication error occurred while processing the request`;
      break;
    case error instanceof Error:
      message = `An error occurred while processing the request`;
      break;
    default:
      break;
  }

  return {
    ok: false,
    message,
  };
};
