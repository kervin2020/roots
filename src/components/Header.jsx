import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Leaf className="text-primary h-6 w-6" />
            <span className="font-montserrat font-bold text-xl tracking-tight">
              Roots of Renewal
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("ai-tool")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              AI Tool
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Contact
            </button>
            <Link href="/donate">
              <Button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition duration-300 font-bold">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} py-4`}
        >
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-800 hover:text-primary block py-2 px-4 hover:bg-gray-100 rounded transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-primary block py-2 px-4 hover:bg-gray-100 rounded transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-800 hover:text-primary block py-2 px-4 hover:bg-gray-100 rounded transition duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("ai-tool")}
              className="text-gray-800 hover:text-primary block py-2 px-4 hover:bg-gray-100 rounded transition duration-300"
            >
              AI Tool
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-800 hover:text-primary block py-2 px-4 hover:bg-gray-100 rounded transition duration-300"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-800 hover:text-primary block py-2 px-4 hover:bg-gray-100 rounded transition duration-300"
            >
              Contact
            </button>
            <Link href="/donate">
              <Button className="bg-primary text-white px-5 py-2 rounded-full text-center hover:bg-opacity-90 transition duration-300 font-bold w-full">
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
