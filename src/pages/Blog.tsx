import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow"
    >
      {/* Featured Post */}
      <section className="bg-lavender py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-6">
                Step-by-step guide to choosing great font pairs
              </h1>
              <p className="text-gray-medium mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Link to="/blog/1" className="btn-primary inline-flex items-center gap-2">
                Read More <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                alt="Featured Post"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">All posts</h2>
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full md:w-64 h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-medium mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-purple font-sen font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">All Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-lg text-center hover:bg-purple hover:text-white transition-colors cursor-pointer group"
              >
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-bold mt-2">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-lavender">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join our team to be a part of our story</h2>
          <p className="text-gray-medium mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <button className="btn-primary">Join Now</button>
        </div>
      </section>
    </motion.div>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Design tips for designers that cover everything you need",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb"
  },
  {
    id: 2,
    title: "How to build rapport with your web design clients",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
  },
  {
    id: 3,
    title: "Logo design trends to avoid in 2022",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766"
  }
];

const categories = [
  { id: 1, name: "Business", icon: "💼" },
  { id: 2, name: "Startup", icon: "🚀" },
  { id: 3, name: "Economy", icon: "📈" },
  { id: 4, name: "Technology", icon: "💻" }
];

export default Blog;