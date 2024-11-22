import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) return <div>Post not found</div>;

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
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-gray-medium">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <p className="font-bold text-primary">{post.author.name}</p>
                <p>Posted on {post.date}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="prose max-w-none"
            >
              {post.content.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.type === 'paragraph' && (
                    <p className="text-gray-medium leading-relaxed mb-6">{section.content}</p>
                  )}
                  {section.type === 'heading' && (
                    <h2 className="text-2xl font-bold mb-4">{section.content}</h2>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Related Posts */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">What to read next</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {post.relatedPosts.map((related, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{related.title}</h3>
                      <p className="text-gray-medium text-sm">{related.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-lavender">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join our team to be a part</h2>
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
    title: "Step-by-step guide to choosing great font pairs",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    date: "March 15, 2024",
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        type: "heading",
        content: "Why it matters"
      },
      {
        type: "paragraph",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    relatedPosts: [
      {
        title: "Font sizes in UI design",
        excerpt: "Learn about the importance of font sizes in UI design",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb"
      },
      {
        title: "Color theory basics",
        excerpt: "Understanding color theory for better design",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
      },
      {
        title: "Typography trends",
        excerpt: "Latest typography trends in web design",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766"
      }
    ]
  }
];

export default BlogPost;