import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const BlogSection = (): JSX.Element => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Stage Your Home for a Quick Sale",
      excerpt: "Learn the professional staging techniques that can help sell your home faster and at a better price. We share tips from industry experts.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "June 15, 2025",
      author: "Emma Wilson",
      category: "Selling Tips",
    },
    {
      id: 2,
      title: "2025 Real Estate Market Forecast",
      excerpt: "Our experts analyze current trends and predict what's coming for the real estate market in 2025. Get ahead with these valuable insights.",
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "June 8, 2025",
      author: "Michael Chen",
      category: "Market Analysis",
    },
    {
      id: 3,
      title: "First-Time Homebuyer's Complete Guide",
      excerpt: "Everything you need to know about buying your first home, from mortgage pre-approval to closing. A step-by-step guide for success.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "May 28, 2025",
      author: "Sarah Johnson",
      category: "Buying Tips",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Stay informed with our latest real estate insights, market trends, and helpful guides
              to navigate the property market successfully.
            </p>
          </div>
          
          <Button variant="outline" className="text-emerald-600 border-emerald-500 hover:bg-emerald-50">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta Information */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-slate-600 mb-6 md:mb-0">
                Stay updated with the latest property listings, market trends, and exclusive real estate tips
                delivered straight to your inbox.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow border border-slate-300 rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent min-w-[240px]"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};