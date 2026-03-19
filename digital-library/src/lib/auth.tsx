"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type UserTier = "Free" | "Premium";

export interface User {
  id: string;
  name: string;
  email: string;
  tier: UserTier;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  upgradeToPremium: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  upgradeToPremium: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Auto-login a mock user for the prototype
  useEffect(() => {
    setUser({
      id: "u1",
      name: "Demo User",
      email: "demo@example.com",
      tier: "Free",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    });
  }, []);

  const login = (email: string) => {
    setUser({
      id: "u2",
      name: email.split("@")[0],
      email,
      tier: "Free",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Avery",
    });
  };

  const logout = () => setUser(null);

  const upgradeToPremium = () => {
    if (user) {
      setUser({ ...user, tier: "Premium" });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, upgradeToPremium }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
