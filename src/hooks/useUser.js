// src/hooks/useUser.js
import { useState } from "react";
import userApi from "../service/api/userApi";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Register (Create)
  const registerUser = async (newUser) => {
    try {
      setLoading(true);
      const res = await userApi.post("/users", newUser);
      setUser(res.data);
      return res.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Login (Read by username & password)
  const loginUser = async (username, password) => {
    try {
      setLoading(true);
      const res = await userApi.get("/users", {
        params: { username, password },
      });
      if (res.data.length > 0) {
        setUser(res.data[0]);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", res.data[0].id);
        return res.data[0];
      } else {
        throw new Error("Username atau password salah!");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Get user by id
  const fetchUser = async (id) => {
    try {
      setLoading(true);
      const res = await userApi.get(`/users/${id}`);
      setUser(res.data);
      return res.data; // 🔥 return biar bisa dipakai
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update user
  const updateUser = async (id, updatedUser) => {
    try {
      const res = await userApi.put(`/users/${id}`, updatedUser);
      setUser(res.data);
      return res.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  // ✅ Delete user
  const deleteUser = async (id) => {
    try {
      await userApi.delete(`/users/${id}`);
      setUser(null);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userId");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return {
    user,
    loading,
    registerUser,
    loginUser,
    fetchUser,
    updateUser,
    deleteUser,
  };
};

export default useUser;
