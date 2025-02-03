import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast"; // ✅ Import toast
import data from "../utils/data.json";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [uploading, setUploading] = useState(false);
  const backendUrl = "https://social-clubs-backend.onrender.com";
  //const backendUrl = "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const loadingToastId = toast.loading("Sending your message...", {
      style: {
        background: "#27272a", // Black background
        color: "#fff", // White text
        borderRadius: "8px",
        padding: "12px",
        fontSize: "14px",
      },
    });

    try {
      const response = await axios.post(
        `${backendUrl}/api/v1/user/contact`,
        formData
      );
      setUploading(false);
      toast.dismiss(loadingToastId);
      toast.success(response.data.message || "Message sent successfully!", {
        style: {
          background: "#27272a",
          color: "#fff", // White text
          borderRadius: "8px",
          padding: "12px",
          fontSize: "14px",
        },
      });

      // Clear form fields after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setUploading(false);
      toast.dismiss(loadingToastId);
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: "#27272a", // Black background
          color: "#fff", // White text
          borderRadius: "8px",
          padding: "12px",
          fontSize: "14px",
        },
      });
    }
  };

  return (
    <section className="p-5 md:p-10 text-center">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="p-6 rounded-lg transition-all duration-200">
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {data.profiles
              .filter((p) => p.id != "profile1" && p.id != "profile3")
              .map((profile) => (
                <a
                  key={profile.id}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 duration-200"
                >
                  <img
                    src={`/assets/svg/${profile.name}.svg`}
                    width="32"
                    alt={profile.name}
                    className="text-2xl"
                  />
                  <span className="text-white">{profile.name}</span>
                </a>
              ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg transition-all duration-200">
          <h3 className="text-xl font-semibold text-white mb-4">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded bg-zinc-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded bg-zinc-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 rounded bg-zinc-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold p-3 rounded transition-all duration-200"
              disabled={uploading}
            >
              {uploading ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
