import { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const IPLogger = () => {
  const backendUrl = "https://social-clubs-backend.onrender.com";
  // Generate or retrieve a unique identifier for the device
  const getDeviceId = () => {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = `portfolio-${uuidv4()}`;
      localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
  };

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        // Fetch IP address
        const response = await axios.get("https://api64.ipify.org?format=json");
        const ip = response.data.ip;
        const deviceId = getDeviceId(); // Get device ID

        // Send IP and device ID to backend
        await axios.post(`${backendUrl}/api/v1/ip/track`, {
          ipAddress: ip,
          deviceId: deviceId,
        });
      } catch (error) {
        console.error("Error fetching IP address or logging data:", error);
      }
    };

    fetchIpAddress();
  }, []);
};
