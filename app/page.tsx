"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { translations, TranslationKey } from "@/components/data/translations";
import { getMenuCategories } from "@/components/data/menuData";

const CoqZoneWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "FR">("FR");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "menu", "about", "contact", "delivery"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["home", "delivery", "menu", "about", "contact"] as const;
  type SectionId = (typeof sections)[number];

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // adjust based on your fixed header height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "EN" : "FR"); //little fix : we want the toggle to display 'EN' when the text is in French
  };

  const t = translations[language];
  const menuCategories = getMenuCategories(language, t);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <img src="/logo_coq_zone.svg" alt="" className="" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {t[section]}
                </button>
              </li>
            ))}
          </ul>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 bg-yellow-500 text-black rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors duration-300"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "FR" ? "EN" : "FR"}</span>
            </button>

            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-500 ease-in-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left capitalize font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                  activeSection === section
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-white hover:text-yellow-400 hover:bg-yellow-400/5"
                }`}
              >
                {t[section]}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen relative flex items-center justify-center overflow-hidden gradient-bg"
      >
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/background_hero.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Badge */}
          <span className="inline-block bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm md:text-base mb-4 animate-fade-in-up">
            🔥{" "}
            {language === "EN"
              ? "Crispy & Fresh Daily"
              : "Croustillant & Frais"}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up leading-tight">
            <span className="gradient-text">{t.heroTitle}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-up animate-delay-200">
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 animate-fade-in-up animate-delay-400">
            <button
              onClick={() => scrollToSection("menu")}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {t.exploreMenu}
              <ChevronDown className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => scrollToSection("delivery")}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 border-2 border-white hover:bg-white/10 text-white font-bold rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105"
            >
              {language === "EN" ? "Order Now" : "Commander"}
            </button>
          </div>
        </div>

        {/* Bouncing Chevron */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-yellow-400" />
        </div>
      </section>

      {/* Delivery Services Section */}
      <section
        id="delivery"
        className="py-12 bg-gray-800 border-b border-gray-700"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">
            {t.orderNow}
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            {/* Uber Eats */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white font-bold text-xs md:text-sm text-center">
                  UBER
                  <br />
                  EATS
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-300">Uber Eats</span>
            </div>

            {/* DoorDash */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white font-bold text-xs md:text-sm text-center">
                  DOOR
                  <br />
                  DASH
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-300">DoorDash</span>
            </div>

            {/* Skip The Dishes */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white font-bold text-xs md:text-sm text-center">
                  SKIP
                  <br />
                  DISHES
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-300">Skip Dishes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            {t.menuTitle.split(" ").map((word, index) =>
              word === "Delicious" || word === "Délicieux" ? (
                <span key={index} className="gradient-text">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {menuCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-black border-2 border-red-900 rounded-2xl p-6 hover:border-yellow-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up animate-delay-${
                  (categoryIndex + 1) * 100
                }`}
              >
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-gray-600">
                  <span className="text-gray-500 font-bold text-lg">
                    Photo Coming Soon
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="border-b border-gray-700 pb-4 last:border-b-0 hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 flex-1 pr-4">
                          {item.name}
                        </h4>
                        <span className="text-yellow-400 font-bold text-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                {t.aboutTitle.split(" ").map((word: string, index: number) =>
                  word === "Coq" || word === "Zone" ? (
                    <span key={index} className="gradient-text">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </h2>
              <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>{t.aboutText1}</p>
                <p>{t.aboutText2}</p>
                <p>{t.aboutText3}</p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="w-full h-64 md:h-96 gradient-bg rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-2xl">
                Restaurant Interior Photo Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div className="animate-fade-in-up">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-6">
                {t.contactInfo}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    239 Boulevard Sainte-Rose, Laval
                  </span>
                </div>
                <br />
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">(514) 123-4567</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-200">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-6">
                {t.hours}
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="text-sm md:text-base">
                    <p>Mon - Thu: 11am - 10pm</p>
                    <p>Fri - Sat: 11am - 11pm</p>
                    <p>Sunday: 12pm - 9pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-400">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-6">
                {t.followUs}
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
            <p className="text-sm md:text-base">
              &copy; 2025 Coq Zone. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoqZoneWebsite;
