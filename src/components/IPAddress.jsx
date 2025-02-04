import { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const IPLogger = () => {
  const backendUrl = "https://social-clubs-backend.onrender.com";
  // Generate or retrieve a unique identifier for the device
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
        // Fetch IP address
        const response = await axios.get("https://api64.ipify.org?format=json");
        const ip = response.data.ip;
        const portfolioId = getPortfolioId();

        // Send IP and device ID to backend
        await axios.post(`${backendUrl}/api/v1/ip/track`, {
          ipAddress: ip,
          deviceId: portfolioId,
        });
      } catch (error) {
        console.error("Error fetching IP address or logging data:", error);
      }
    };

    fetchIpAddress();
  }, []);
};
