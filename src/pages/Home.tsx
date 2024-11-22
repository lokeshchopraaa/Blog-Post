import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow"
    >
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="container-custom py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Step-by-step guide to choosing great font pairs
              </h1>
              <p className="text-gray-medium mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className="btn-primary flex items-center gap-2">
                Read More <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                alt="Featured"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Authors</h2>
              <p className="text-gray-medium">Meet our talented content creators</p>
            </div>
            <Link 
              to="/author/andrew-johnson"
              className="text-purple font-sen font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Authors <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredAuthors.map((author, index) => (
              <motion.div
                key={author.slug}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg text-center group hover:shadow-lg transition-all"
              >
                <Link to={`/author/${author.slug}`}>
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                  />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple transition-colors">{author.name}</h3>
                  <p className="text-gray-medium text-sm mb-4">{author.role}</p>
                  <div className="flex justify-center items-center gap-2 text-purple">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{author.posts} posts</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-lavender">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Categories</h2>
              <p className="text-gray-medium">Explore our content categories</p>
            </div>
            <Link 
              to="/category/business"
              className="text-purple font-sen font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Categories <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg text-center hover:bg-purple hover:text-white transition-all group cursor-pointer"
              >
                <Link to={`/category/${category.slug}`} className="block">
                  <span className="text-4xl mb-4 block transition-transform group-hover:scale-110">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <div className="flex justify-center items-center gap-2 text-gray-medium group-hover:text-white/80">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-sm">{category.posts} articles</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-medium mb-4">{post.excerpt}</p>
                  <button className="text-purple font-sen font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const featuredAuthors = [
  {
    slug: 'andrew-johnson',
    name: 'Andrew Johnson',
    role: 'Content Writer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    posts: 12
  },
  {
    slug: 'dianne-russell',
    name: 'Dianne Russell',
    role: 'Content Writer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    posts: 8
  },
  {
    slug: 'jenny-wilson',
    name: 'Jenny Wilson',
    role: 'Content Writer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    posts: 15
  },
  {
    slug: 'leslie-alexander',
    name: 'Leslie Alexander',
    role: 'Content Writer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    posts: 10
  }
];

const categories = [
  {
    slug: 'business',
    name: 'Business',
    icon: '💼',
    posts: 12
  },
  {
    slug: 'startup',
    name: 'Startup',
    icon: '🚀',
    posts: 8
  },
  {
    slug: 'economy',
    name: 'Economy',
    icon: '📈',
    posts: 6
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: '💻',
    posts: 4
  }
];

const featuredPosts = [
  {
    id: 1,
    title: "8 Figma design systems you can download for free today",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb"
  },
  {
    id: 2,
    title: "Font sizes in UI design: The complete guide to follow",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
  },
  {
    id: 3,
    title: "How to design a product that can grow itself 10x in year",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766"
  }
];

export default Home;