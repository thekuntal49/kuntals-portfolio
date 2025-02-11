import { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { connectSocket, disconnectSocket } from "./socket.js";

export const IPLogger = () => {
  const backendUrl = "https://kuntal-api.onrender.com";

  const getPortfolioId = () => {
    let portfolioId = localStorage.getItem("portfolioId");
    if (!portfolioId) {
      portfolioId = `portfolio-${uuidv4()}`;
      localStorage.setItem("portfolioId", portfolioId);
    }
    return portfolioId;
  };

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const portfolioId = getPortfolioId();

        const response = await axios.get("https://api64.ipify.org?format=json");
        const ip = response.data.ip;
        // Send device ID to backend (IP is handled there)
        await axios.post(`${backendUrl}/api/v1/ip/get-ip`, {
          deviceId: portfolioId,
          bodyIp: ip,
        });

        // Connect WebSocket after backend logs the session
        connectSocket(portfolioId);
      } catch (error) {
        console.error("Error fetching IP address or logging data:", error);
      }
    };

    fetchIpAddress();

    return () => {
      disconnectSocket(); // Cleanup on unmount
    };
  }, []);
};
