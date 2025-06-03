import React, { useState, useEffect } from "react";
import { Home, User, Building, Phone, Menu, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { label: "Home", icon: Home, active: true },
    { label: "Properties", icon: Building, active: false },
    { label: "About", icon: User, active: false },
    { label: "Contact", icon: Phone, active: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="text-slate-800 mr-2">
              <Building className="w-8 h-8" />
            </div>
            <div>
              <div className="font-sans">
                <span className="font-bold text-emerald-600 text-2xl">Estate</span>
                <span className="font-bold text-slate-800 text-2xl">Vista</span>
              </div>
              <div className="text-slate-500 text-xs mt-0.5">
                Premium Real Estate
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    className={`font-sans text-base flex items-center gap-1.5 transition-colors ${
                      item.active
                        ? "font-medium text-emerald-600"
                        : "font-normal text-slate-700 hover:text-emerald-600"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 font-sans font-medium text-base rounded">
              List Your Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 mt-3">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 py-2.5 px-4 rounded ${
                  item.active
                    ? "bg-emerald-50 text-emerald-600 font-medium"
                    : "text-slate-700"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mt-2 py-2.5">
              List Your Property
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};