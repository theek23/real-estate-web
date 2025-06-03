import React from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const ContactSection = (): JSX.Element => {
  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-600">
            Have questions about our properties or services? Contact us today and one of our
            real estate experts will be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-slate-300 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-slate-300 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-slate-300 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full border border-slate-300 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Property Viewing</option>
                    <option>Buying Property</option>
                    <option>Selling Property</option>
                    <option>Rental Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border border-slate-300 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-600 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Office Address</h4>
                    <p className="text-slate-300">
                      123 Property Lane, Suite 101<br />
                      Real Estate City, CA 90210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-600 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email Us</h4>
                    <p className="text-slate-300">info@estatevista.com</p>
                    <p className="text-slate-300">support@estatevista.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-600 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Call Us</h4>
                    <p className="text-slate-300">+1 (555) 123-4567</p>
                    <p className="text-slate-300">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-emerald-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-800">Office Hours</h3>
              </div>
              
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-slate-700 font-medium">{schedule.day}</span>
                    <span className="text-slate-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};