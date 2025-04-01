"use client";
import Image from "next/image";

import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import NewRelease from "./components/NewRelease";
import TopMovies from "./components/TopMovies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Slider />
      <div className="topMovies">
        <TopMovies />
      </div>
      <div>
        <h2>New Release</h2>
        <NewRelease />
      </div>
      <div>
        <h2>Trending</h2>
        <NewRelease />
      </div>
    </div>
  );
}
