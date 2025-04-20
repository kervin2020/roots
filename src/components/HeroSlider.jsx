import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    title: "Transform Urban Spaces",
    description:
      "Creating sustainable green environments for healthier communities",
    ctaText: "Try Our AI Tool",
    ctaLink: "#ai-tool",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    title: "Community Gardens",
    description: "Building connections through shared green spaces",
    ctaText: "View Our Projects",
    ctaLink: "#gallery",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596273312299-d87546c4d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80",
    title: "Join Our Mission",
    description: "Help us create a greener, more sustainable future",
    ctaText: "Donate Today",
    ctaLink: "/donate",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith("/")) {
      window.location.href = sectionId;
      return;
    }

    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-24 bg-gray-50">
      <div className="relative overflow-hidden h-[80vh] min-h-[500px]">
        <div className="h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center bg-cover bg-center ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <Button
                  onClick={() => scrollToSection(slide.ctaLink)}
                  className="bg-primary text-white px-6 py-6 rounded-full inline-block hover:bg-opacity-90 transition duration-300 font-bold text-lg"
                >
                  {slide.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => {
                goToSlide(index);
                resetInterval();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 focus:outline-none z-20"
          onClick={() => {
            prevSlide();
            resetInterval();
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 focus:outline-none z-20"
          onClick={() => {
            nextSlide();
            resetInterval();
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
