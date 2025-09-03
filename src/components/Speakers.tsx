import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Data Scientist",
      company: "Google AI",
      bio: "Leading researcher in machine learning and neural networks with 15+ years of experience in AI development.",
      image: "https://londonspeakerbureau.com/wp-content/uploads/2017/04/Rand-Hindi.jpg",
      talk: "The Future of AI in Healthcare",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Director of Data Science",
      company: "MIT",
      bio: "Renowned academic and researcher specializing in big data analytics and statistical modeling.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      talk: "Ethical AI and Responsible Data Science",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Priya Patel",
      role: "VP of Analytics",
      company: "Netflix",
      bio: "Expert in recommendation systems and user behavior analysis, driving personalization at scale.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      talk: "Building Scalable Recommendation Systems",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. James Wilson",
      role: "Senior Research Scientist",
      company: "DeepMind",
      bio: "Pioneer in reinforcement learning and autonomous systems with groundbreaking research in AI.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      talk: "Reinforcement Learning in Real-World Applications",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Lisa Zhang",
      role: "Head of ML Engineering",
      company: "Tesla",
      bio: "Leading the development of autonomous driving systems and computer vision technologies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      talk: "Computer Vision for Autonomous Vehicles",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Principal Data Scientist",
      company: "Amazon",
      bio: "Expert in natural language processing and conversational AI with focus on multilingual systems.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      talk: "NLP and the Future of Human-AI Interaction",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
            World-Class Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry leaders, researchers, and visionaries who are shaping 
            the future of data science and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-glow card-hover overflow-hidden h-full">
                {/* Speaker Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={speaker.social.linkedin}
                      className="p-2 bg-primary rounded-full shadow-glow hover:scale-110 transition-transform"
                    >
                      <Linkedin className="h-4 w-4 text-primary-foreground" />
                    </a>
                    <a
                      href={speaker.social.twitter}
                      className="p-2 bg-secondary rounded-full shadow-glow-secondary hover:scale-110 transition-transform"
                    >
                      <Twitter className="h-4 w-4 text-secondary-foreground" />
                    </a>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-secondary font-medium mb-3">
                    {speaker.company}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {speaker.bio}
                  </p>
                  
                  {/* Talk Title */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          Talk Topic
                        </p>
                        <p className="text-sm font-semibold text-accent">
                          {speaker.talk}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground ml-2 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground">
            And many more amazing speakers to be announced!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;