import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import storage from "../utils/storage";
import { authApi } from '../services/api';
import { mockUsers } from "../data/mockUsers";
import { AuthContext } from "../contexts/AuthContext";
import config from "../utils/config";

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

  const mockLogin = async (email, password) => {
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

    return userData;
  };

  const apiLogin = async (email, password) => {
    const response = await authApi.login(email, password);

    const userData = {
      email: email,
      access_token: response.access_token,
      token_type: response.token_type
    };

    return userData;
  };

  const login = async (email, password) => {
    try {
      const userData = config.mockLogin
        ? await mockLogin(email, password)
        : await apiLogin(email, password);

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
