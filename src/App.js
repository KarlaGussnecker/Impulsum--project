import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import { VStack, Box } from "@chakra-ui/react";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Contribute from "./components/Contribute";
import Footer from "./components/Footer";
import "@fontsource/roboto";
import "@fontsource/inter";

export default function App() {
  return (
    <VStack bg="black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Contact />
      <Contribute />
      <Footer />
    </VStack>
  );
}
