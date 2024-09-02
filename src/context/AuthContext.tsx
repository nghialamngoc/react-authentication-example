import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";
import axios from "axios";
import { getUser, loginApi, refreshTokenApi } from "../api/auth";

interface AuthContextType {
  user: any;
  isLoading: boolean;
  hasRole: (role: string) => boolean;
  can: (permission: string) => boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          const userData = await getUser();
          setUser(userData);
        } catch (error) {
          // Token invalid, clear storage

          console.error("Error initializing auth:", error);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const { accessToken, refreshToken } = await loginApi(username, password);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setUser({
        username,
      });

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  const hasRole = (role: string) => {
    return user && user.roles && user.roles.includes(role);
  };

  const can = (permission: string) => {
    return user && user.permissions && user.permissions.includes(permission);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoading, hasRole, can }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
