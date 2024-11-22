import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-6">
                We are a team of content writers who share their learnings
              </h1>
              <p className="text-gray-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Our Team"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-medium">
                Creating valuable content for creatives all around the world
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-medium">
                A platform that empowers individuals to improve their lives through writing
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-lavender">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">List of Authors</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-gray-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16">
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

const stats = [
  { value: "12+", label: "Blogs Published" },
  { value: "18K+", label: "Views on Finsweet" },
  { value: "30K+", label: "Total active Users" }
];

const team = [
  {
    name: "Floyd Miles",
    role: "Content Writer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Dianne Russell",
    role: "Content Writer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Jenny Wilson",
    role: "Content Writer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    name: "Leslie Alexander",
    role: "Content Writer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];

export default About;