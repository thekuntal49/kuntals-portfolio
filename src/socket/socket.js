import { io } from "socket.io-client";

const SERVER_URL = "https://kuntal-api.onrender.com";

export const socket = io(SERVER_URL, {
  autoConnect: true,
});

export const connectSocket = (deviceId) => {
  if (!socket.connected) {
    socket.connect();

    // Add heartbeat
    const heartbeatInterval = setInterval(() => {
      socket.emit("heartbeat", { deviceId: deviceId });
    }, 30000); // Every 30 seconds

    socket.on("connect", () => {
      socket.emit("registerDevice", { deviceId: deviceId });
    });

    socket.on("disconnect", () => {
      clearInterval(heartbeatInterval);
    });
  }
};

export const disconnectSocket = () => {
  // Removed portfolioId parameter
  if (socket.connected) {
    socket.disconnect();
    console.log("Socket disconnected.");
  }
};
