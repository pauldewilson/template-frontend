import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import storage from "../utils/storage";
import { mockUsers } from "../data/mockUsers.js";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => storage.get("user"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = storage.get("user");
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const foundUser = mockUsers.users.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error("Invalid credentials");
      }

      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
      };

      storage.set("user", userData);
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    storage.remove("user");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
