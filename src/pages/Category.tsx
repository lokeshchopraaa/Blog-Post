import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Category = () => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);

  if (!category) return <div>Category not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow"
    >
      {/* Hero Section */}
      <section className="bg-lavender py-16">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-4xl mb-4 block">{category.icon}</span>
            <h1 className="text-4xl font-bold mb-6">{category.name}</h1>
            <p className="text-gray-medium">{category.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="space-y-8">
                {category.posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full md:w-48 h-48 object-cover"
                      />
                      <div className="p-6">
                        <Link to={`/blog/${post.id}`}>
                          <h2 className="text-xl font-bold mb-3 hover:text-purple transition-colors">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-gray-medium mb-4">{post.excerpt}</p>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-purple font-sen font-bold flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          Read More <ArrowRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Categories Sidebar */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map((cat, index) => (
                    <motion.div
                      key={cat.slug}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={`/category/${cat.slug}`}
                        className={`block p-2 rounded hover:bg-lavender transition-colors ${
                          cat.slug === slug ? 'bg-lavender' : ''
                        }`}
                      >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-lavender">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our news letter to get latest updates and news</h2>
          <div className="max-w-xl mx-auto mt-8 flex gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const categories = [
  {
    slug: 'business',
    name: 'Business',
    icon: '💼',
    description: 'Get the latest business insights and strategies',
    posts: [
      {
        id: 1,
        title: 'How to validate your business idea',
        excerpt: 'Learn the essential steps to validate your business idea before investing time and money.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
      },
      {
        id: 2,
        title: 'Creating a solid business plan',
        excerpt: 'A step-by-step guide to creating a comprehensive business plan that works.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
      }
    ]
  },
  {
    slug: 'startup',
    name: 'Startup',
    icon: '🚀',
    description: 'Everything you need to know about launching and growing your startup',
    posts: []
  },
  {
    slug: 'economy',
    name: 'Economy',
    icon: '📈',
    description: 'Stay updated with the latest economic trends and analysis',
    posts: []
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: '💻',
    description: 'Explore the latest in technology and digital transformation',
    posts: []
  }
];

export default Category;