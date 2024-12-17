"use client";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";
import { usePostStore } from "@/app/libs/posts";
import Navbarbutton from "./Navbarbutton";
import AuthContextProvider from "../libs/contexts/AuthContext";
import SearchBar from "./postsearch";

export default function EnhancedNavbar({ title }: { title?: string }) {
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { posts, setFilteredPosts } = usePostStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);

    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
      return;
    }

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPosts(filtered);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 sticky top-0 z-50 shadow-lg transition-all duration-300">
      {/* Logo and Theme Toggle */}
      <div className="flex w-full md:w-auto justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-purple-500 transition">
          {title ?? "Enhanced Blog"}
        </Link>
        <div className="flex items-center gap-4">
          {isDarkMode ? (
            <BsSun
              size={24}
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => setIsDarkMode(false)}
              aria-label="Switch to light mode"
            />
          ) : (
            <BsMoon
              size={24}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => setIsDarkMode(true)}
              aria-label="Switch to dark mode"
            />
          )}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row w-full md:w-auto items-center gap-4 mt-4 md:mt-0">
        <SearchBar search={search} onSearchChange={handleSearch} />
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-0 w-full md:w-auto`}
      >
        <Link
          href="/category"
          className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-white transition"
        >
          Categories
        </Link>
        <Link
          href="/about"
          className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-white transition"
        >
          About Me
        </Link>

        {isAuthenticated ? (
          <>
            <Link
              href="/profile"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-white transition"
            >
              Profile
            </Link>
            <Link
              href="/logout"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-white transition"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-white transition"
            >
              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                Login
              </button>
            </Link>
            <AuthContextProvider>
              <Navbarbutton />
            </AuthContextProvider>
          </>
        )}
      </nav>
    </header>
  );
}

