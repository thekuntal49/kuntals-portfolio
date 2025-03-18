// import { useEffect } from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import { connectSocket, disconnectSocket } from "./socket.js";

// export const IPLogger = () => {
//   const backendUrl = "https://kuntal-api.onrender.com";

//   const getPortfolioId = () => {
//     let portfolioId = localStorage.getItem("portfolioId");
//     if (!portfolioId) {
//       portfolioId = `portfolio-${uuidv4()}`;
//       localStorage.setItem("portfolioId", portfolioId);
//     }
//     return portfolioId;
//   };

//   useEffect(() => {
//     const fetchIpAddress = async () => {
//       try {
//         const portfolioId = getPortfolioId();

//         const response = await axios.get("https://api64.ipify.org?format=json");
//         const ip = response.data.ip;
//         // Send device ID to backend (IP is handled there)
//         await axios.post(`${backendUrl}/api/v1/ip/get-ip`, {
//           deviceId: portfolioId,
//           bodyIp: ip,
//         });

//         // Connect WebSocket after backend logs the session
//         connectSocket(portfolioId);
//       } catch (error) {
//         console.error("Error fetching IP address or logging data:", error);
//       }
//     };

//     fetchIpAddress();

//     return () => {
//       disconnectSocket(); // Cleanup on unmount
//     };
//   }, []);
// };

import { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const IPLogger = () => {
  const backendUrl = "https://social-clubs-backend.onrender.com";
  const projectName = "Kuntals Portfolio";
  const PROJECT_NAME = projectName.toLowerCase().split(" ").join();

  const getBrowserFingerprint = () => {
    return btoa(
      `${navigator.userAgent}-${screen.width}x${screen.height}-${
        Intl.DateTimeFormat().resolvedOptions().timeZone
      }`
    );
  };

  const getDeviceId = () => {
    let deviceId = localStorage.getItem(`${PROJECT_NAME}_device_id`);
    if (!deviceId) {
      deviceId = PROJECT_NAME + "-" + getBrowserFingerprint();
      localStorage.setItem(`${PROJECT_NAME}_device_id`, deviceId);
    }
    return deviceId;
  };

  const sendTrackingData = async () => {
    const deviceId = getDeviceId();

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          await axios.get(`${backendUrl}/api/v1/ip/track`, {
            params: {
              latitude,
              longitude,
              deviceId,
              projectName,
            },
          });
        } catch (error) {
          console.error("Error sending location:", error);
        }
      },
      async (error) => {
        console.warn("Geolocation failed, falling back to IP:", error.message);

        try {
          const response = await axios.get(
            "https://api64.ipify.org?format=json"
          );
          const ip = PROJECT_NAME + "-" + response.data.ip;

          await axios.get(`${backendUrl}/api/v1/ip/track`, {
            params: { ip, deviceId, projectName },
          });
        } catch (error) {
          console.error("Error fetching/sending IP:", error);
        }
      }
    );
  };

  useEffect(() => {
    sendTrackingData();
  }, []);

  return null;
};
