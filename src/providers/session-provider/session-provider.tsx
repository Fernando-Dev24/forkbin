"use client";

import { UserSession } from "@/interfaces";
import { createContext, useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  session: UserSession;
}

interface Session {
  session: UserSession;
}

const SessionContext = createContext({} as Session);
export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children, session }: Props) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    // TODO: Render a custom loader
    return <div>Loading...</div>;
  }

  return (
    <SessionContext.Provider value={{ session }}>
      {isHydrated && children}
    </SessionContext.Provider>
  );
};
