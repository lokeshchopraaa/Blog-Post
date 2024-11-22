import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Facebook, Twitter, Instagram } from 'lucide-react';

const Author = () => {
  const { slug } = useParams();
  const author = authors.find(a => a.slug === slug);

  if (!author) return <div>Author not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple to-purple/90 text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={author.avatar}
              alt={author.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-4">
                Hey there, I'm {author.name} and welcome to my Blog
              </h1>
              <p className="text-white/80 mb-6">{author.bio}</p>
              <div className="flex gap-4">
                <a href={author.social.facebook} className="hover:text-accent transition-colors">
                  <Facebook />
                </a>
                <a href={author.social.twitter} className="hover:text-accent transition-colors">
                  <Twitter />
                </a>
                <a href={author.social.instagram} className="hover:text-accent transition-colors">
                  <Instagram />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">My Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {author.posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-purple transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-medium mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-purple font-sen font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.article>
            ))}
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

const authors = [
  {
    slug: 'andrew-johnson',
    name: 'Andrew Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Experienced tech writer with a passion for explaining complex concepts in simple terms.',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    },
    posts: [
      {
        id: 1,
        title: 'Five steps to UI design: The complete guide to follow',
        excerpt: 'Learn the essential steps to create beautiful and functional user interfaces.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
      },
      {
        id: 2,
        title: 'How to be in rapport with your web design clients',
        excerpt: 'Build better relationships with your clients and deliver outstanding results.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
      }
    ]
  }
];

export default Author;