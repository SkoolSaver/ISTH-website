'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, passwordPlain: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check localStorage on mount
    const storedLogin = localStorage.getItem('isth_admin_logged_in');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const hashPassword = async (password: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const login = async (username: string, passwordPlain: string) => {
    const envUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const envPasswordHash = process.env.NEXT_PUBLIC_ADMIN_HASHED_PW;

    const hashedPassword = await hashPassword(passwordPlain);

    if (username === envUsername && hashedPassword === envPasswordHash) {
      setIsLoggedIn(true);
      localStorage.setItem('isth_admin_logged_in', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isth_admin_logged_in');
    router.push('/pages/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
