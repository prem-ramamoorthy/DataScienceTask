import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, User, ChevronDown, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const scheduleData = [
    {
      time: "09:00 - 09:30",
      title: "Registration & Welcome Coffee",
      type: "break",
      location: "Main Lobby",
      description: "Check-in, networking, and welcome refreshments"
    },
    {
      time: "09:30 - 10:30",
      title: "Opening Keynote: The Future of AI in Healthcare",
      type: "keynote",
      speaker: "Dr. Sarah Chen, Google AI",
      location: "Main Auditorium",
      description: "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic imaging to personalized treatment plans. Dr. Chen will share insights from Google's latest healthcare AI initiatives and discuss the ethical considerations of AI in medical practice."
    },
    {
      time: "10:45 - 11:45",
      title: "Workshop: Hands-on Machine Learning with Python",
      type: "workshop",
      speaker: "Prof. Michael Rodriguez, MIT",
      location: "Workshop Room A",
      description: "Interactive session covering practical ML implementation using scikit-learn and pandas. Participants will build and deploy a complete ML pipeline from data preprocessing to model evaluation."
    },
    {
      time: "11:45 - 12:15",
      title: "Coffee Break & Networking",
      type: "break",
      location: "Exhibition Hall",
      description: "Connect with fellow attendees and explore sponsor exhibitions"
    },
    {
      time: "12:15 - 13:15",
      title: "Panel Discussion: Ethics in AI",
      type: "panel",
      speaker: "Moderated by Dr. Priya Patel",
      location: "Main Auditorium",
      description: "A thought-provoking discussion on the ethical implications of AI development, bias in algorithms, and the importance of responsible AI practices in industry and research."
    },
    {
      time: "13:15 - 14:15",
      title: "Lunch Break",
      type: "break",
      location: "Dining Hall",
      description: "Networking lunch with catered meals"
    },
    {
      time: "14:15 - 15:15",
      title: "Deep Dive: Reinforcement Learning Applications",
      type: "technical",
      speaker: "Dr. James Wilson, DeepMind",
      location: "Main Auditorium",
      description: "Advanced session exploring real-world applications of reinforcement learning in robotics, game playing, and autonomous systems. Includes case studies from DeepMind's latest research."
    },
    {
      time: "15:30 - 16:30",
      title: "Parallel Sessions",
      type: "parallel",
      location: "Multiple Rooms",
      description: "Choose from three concurrent sessions",
      sessions: [
        {
          title: "Computer Vision for Autonomous Vehicles",
          speaker: "Dr. Lisa Zhang, Tesla",
          location: "Room A"
        },
        {
          title: "NLP and Conversational AI",
          speaker: "Dr. Ahmed Hassan, Amazon",
          location: "Room B"
        },
        {
          title: "Building Scalable Data Pipelines",
          speaker: "Industry Expert",
          location: "Room C"
        }
      ]
    },
    {
      time: "16:45 - 17:30",
      title: "Closing Keynote & Awards Ceremony",
      type: "keynote",
      speaker: "Distinguished Guest Speaker",
      location: "Main Auditorium",
      description: "Closing remarks, recognition of outstanding contributions to data science, and preview of next year's summit."
    },
    {
      time: "17:30 - 19:00",
      title: "Networking Reception",
      type: "social",
      location: "Rooftop Terrace",
      description: "Join us for drinks, appetizers, and continued networking in a relaxed atmosphere"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'workshop':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'panel':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'technical':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'parallel':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'social':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'keynote':
      case 'technical':
        return <User className="h-4 w-4" />;
      case 'workshop':
        return <User className="h-4 w-4" />;
      case 'break':
      case 'social':
        return <Clock className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
            Event Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A full day packed with insights, learning, and networking opportunities. 
            Click on any session to learn more details.
          </p>
        </motion.div>

        <div className="space-y-4">
          {scheduleData.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-glow overflow-hidden">
                <div
                  className={`p-6 cursor-pointer ${
                    session.description ? 'hover:bg-card-hover' : ''
                  } transition-colors duration-200`}
                  onClick={() => {
                    if (session.description) {
                      setExpandedSession(
                        expandedSession === `session-${index}` 
                          ? null 
                          : `session-${index}`
                      );
                    }
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2 text-primary font-mono text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>
                        
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(session.type)}`}>
                          <div className="flex items-center space-x-1">
                            {getTypeIcon(session.type)}
                            <span className="capitalize">{session.type}</span>
                          </div>
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {session.title}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-muted-foreground">
                        {session.speaker && (
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{session.speaker}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                    </div>

                    {session.description && (
                      <motion.div
                        animate={{ 
                          rotate: expandedSession === `session-${index}` ? 90 : 0 
                        }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 text-muted-foreground"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </motion.div>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSession === `session-${index}` && session.description && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-6 bg-muted/10">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {session.description}
                        </p>

                        {session.sessions && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">
                              Parallel Session Options:
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {session.sessions.map((parallelSession, pIndex) => (
                                <div key={pIndex} className="bg-card/50 p-4 rounded-lg border border-border">
                                  <h5 className="font-medium text-foreground mb-2">
                                    {parallelSession.title}
                                  </h5>
                                  <p className="text-sm text-muted-foreground mb-1">
                                    {parallelSession.speaker}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    📍 {parallelSession.location}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="card-glow p-6">
            <p className="text-muted-foreground">
              <strong>Note:</strong> Schedule is subject to change. All times are in local timezone.
              Registered attendees will receive updates via email.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;