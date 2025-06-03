import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "About us", active: false },
    { label: "Service", active: false },
    { label: "Blog", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <header className="flex items-center justify-between w-full py-6 px-[135px]">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="w-[29px] h-12"
          alt="ProCleaning Logo"
          src="/vector-1.svg"
        />
        <div className="ml-[38px]">
          <div className="font-['Be_Vietnam_Pro',Helvetica] text-[25px] whitespace-nowrap">
            <span className="font-extrabold text-[#36b864]">Pro</span>
            <span className="font-extrabold text-[#111c15]">Cleaning</span>
          </div>
          <div className="font-['Be_Vietnam_Pro',Helvetica] text-[#4d4d4d] text-xs mt-1">
            Cleaning Services company
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-[29px]">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                className={`font-['Be_Vietnam_Pro',Helvetica] text-base ${
                  item.active
                    ? "font-medium text-[#36b864]"
                    : "font-normal text-[#4d4d4d]"
                }`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA Button */}
      <Button className="bg-[#36b864] hover:bg-[#2da558] px-8 py-3 rounded-md font-['Poppins',Helvetica] font-medium text-base">
        Get a quote
      </Button>
    </header>
  );
};
