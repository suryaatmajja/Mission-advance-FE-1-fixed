import { useState, useEffect } from "react";
import api from "../service/api/movieApi"; // ini bisa kamu rename nanti ke historyApi.js

const useHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ GET History
  const fetchHistory = async () => {
    try {
      setLoading(true);
      const res = await api.get("/history"); // sesuai resource di MockAPI
      setHistory(res.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ ADD History
  const addHistory = async (newHistory) => {
    try {
      const res = await api.post("/history", newHistory);
      setHistory((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error adding history:", error);
    }
  };

  // ✅ UPDATE History
  const updateHistory = async (id, updatedHistory) => {
    try {
      const res = await api.put(`/history/${id}`, updatedHistory);
      setHistory((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );
    } catch (error) {
      console.error("Error updating history:", error);
    }
  };

  // ✅ DELETE History
  const deleteHistory = async (id) => {
    try {
      await api.delete(`/history/${id}`);
      setHistory((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting history:", error);
    }
  };

  // Auto-fetch saat hook dipakai
  useEffect(() => {
    fetchHistory();
  }, []);

  return {
    history,
    loading,
    fetchHistory,
    addHistory,
    updateHistory,
    deleteHistory,
  };
};

export default useHistory;
