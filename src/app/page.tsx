"use client";
import { useState } from "react";
import { Header } from "../components/Header";
import { FeaturedTours } from "../components/FeaturedTours";
import { SearchResults } from "../components/SearchResults";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearchActive(true);
  };

  const handleBackToHome = () => {
    setIsSearchActive(false);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBackToHome={handleBackToHome} />

      {!isSearchActive ? (
        <>
          <HeroSection onSearch={handleSearch} />
          <FeaturedTours />
        </>
      ) : (
        <SearchResults query={searchQuery} onBackToHome={handleBackToHome} />
      )}

      <Footer />
    </div>
  );
}
