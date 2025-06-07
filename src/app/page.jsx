import React from "react";
import { Section } from "../components/home/Section";
import { Footer } from "../components/home/Footer";
import { SearchBar } from "@/components/global/SearchBar";
import { Tabs } from "@/components/global/Tabs";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Section />
      <Footer />
    </div>
  );
};

export default HomePage;
