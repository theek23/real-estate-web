import React from "react";
import { Building, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: ["About Us", "Our Team", "Careers", "Press"],
    services: ["Buy", "Sell", "Rent", "Property Management", "Investment"],
    resources: ["Blog", "Help Center", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-emerald-500 mr-2" />
              <div>
                <div className="font-sans">
                  <span className="font-bold text-emerald-500 text-xl">Estate</span>
                  <span className="font-bold text-white text-xl">Vista</span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              We provide premium real estate services with a focus on client satisfaction.
              Our team of experts is dedicated to helping you find your dream property.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-emerald-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-emerald-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  123 Property Lane, Real Estate City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-slate-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-slate-300 text-sm">info@estatevista.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} EstateVista. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.resources.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};