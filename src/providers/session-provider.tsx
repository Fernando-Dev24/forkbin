"use client";

import { createClient } from "@/lib/supabase/client";
import { type AuthSession } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface Session {
  session: AuthSession | null;
}

const SessionContext = createContext({} as Session);
export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });
  }, []);

  return (
    <SessionContext.Provider value={{ session }}>
      {!isLoading && children}
    </SessionContext.Provider>
  );
};
