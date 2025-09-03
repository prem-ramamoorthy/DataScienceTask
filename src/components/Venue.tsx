import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Monitor, Users, Car, Wifi } from 'lucide-react';

const Venue = () => {
  const venueFeatures = [
    {
      icon: Users,
      title: "Capacity for 500+",
      description: "Spacious venues for all attendees"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Reliable internet throughout"
    },
    {
      icon: Monitor,
      title: "A/V Equipment",
      description: "State-of-the-art presentation tech"
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "Free parking for all attendees"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6380498136",
      link: "tel:+916380498136"
    },
    {
      icon: Mail,
      label: "Email",
      value: "prem.23mip10019@vitbhopal.ac.in",
      link: "mailto:prem.23mip10019@vitbhopal.ac.in"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh 466114",
      link: "https://maps.google.com/?q=123+Tech+Plaza+San+Francisco"
    }
  ];

  return (
    <section id="venue" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
            Venue & Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us at our state-of-the-art venue, or participate virtually from anywhere in the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* In-Person Venue */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-glow p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">In-Person Venue</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tech Innovation Center</h4>
                  <p className="text-muted-foreground">
                    Located in VIT bhopal Auditorium , our venue
                    offers cutting-edge facilities perfect for a data science summit.
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>September 15, 2025 | 9:00 AM - 7:00 PM PST</span>
                </div>
              </div>

              {/* Venue Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {venueFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 bg-muted/20 rounded-lg"
                  >
                    <feature.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-foreground text-sm">
                        {feature.title}
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Embed */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5356488718044!2d76.84874337535929!3d23.077479579135304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1756932344336!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Location" />
              </div>
            </div>
          </motion.div>

          {/* Virtual Attendance */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-glow p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center shadow-glow-secondary">
                  <Monitor className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-secondary">Virtual Attendance</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Join from Anywhere</h4>
                  <p className="text-muted-foreground">
                    Can't make it in person? No problem! Our virtual platform offers
                    the full summit experience from the comfort of your home or office.
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="font-medium text-foreground">Virtual Features:</h5>
                  <ul className="space-y-2">
                    {[
                      "HD live streaming of all sessions",
                      "Interactive Q&A with speakers",
                      "Virtual networking rooms",
                      "Access to digital materials",
                      "Session recordings available",
                      "Real-time polls and discussions"
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h5 className="font-medium text-foreground mb-2">Platform Details:</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    We'll be using Zoom Webinar for the main sessions and Gather.town
                    for interactive networking. Access links will be sent to registered
                    virtual attendees 24 hours before the event.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    System requirements: Stable internet connection, modern web browser,
                    optional webcam and microphone for networking sessions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-glow p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                Get in Touch
              </h3>
              <p className="text-muted-foreground">
                Have questions? Need help with registration? We're here to help!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300 hover:bg-card/50"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform">
                    <contact.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {contact.label}
                  </h4>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                    {contact.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                For press inquiries, partnership opportunities, or speaking proposals,
                please email us directly at{' '}
                <a
                  href="mailto:partnerships@datasciencesummit.com"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  partnerships@datasciencesummit.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;