import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Trophy, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Cutting-Edge Knowledge",
      description: "Learn the latest in AI, ML, and data science from industry leaders and researchers."
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with like-minded professionals, students, and experts in the data science community."
    },
    {
      icon: Trophy,
      title: "Hands-On Workshops",
      description: "Participate in interactive sessions and practical workshops to enhance your skills."
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Discover new career paths and opportunities in the rapidly evolving data science field."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
            About the Summit
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The Data Science Club Summit 2025 is the premier event for data enthusiasts, professionals, 
            and students. Join us for an immersive experience that combines cutting-edge research, 
            practical applications, and meaningful connections in the world of data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-glow card-hover p-8 text-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-primary shadow-glow mx-auto"
                >
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card-glow p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Why Attend?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a seasoned data scientist, a curious student, or someone looking to transition 
              into the field, this summit offers something for everyone. From keynote presentations by 
              industry titans to intimate workshop sessions, you'll leave with actionable insights, 
              valuable connections, and the inspiration to push the boundaries of what's possible with data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;