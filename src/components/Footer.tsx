import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Calendar, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/data-science-club',
      color: 'hover:text-[#0077B5]'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/datascienceclub',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/data-science-club',
      color: 'hover:text-foreground'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:info@datasciencesummit.com',
      color: 'hover:text-primary'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Register', href: '#register' },
    { name: 'Venue', href: '#venue' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-t from-background to-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">DSC</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Data Science Club Summit is the premier annual event bringing together 
              data scientists, researchers, and enthusiasts from around the world.
            </p>
            
            {/* Event Quick Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>April 15, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>VIT bhopal & Virtual</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email:</p>
                <a 
                  href="mailto:info@datasciencesummit.com"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  prem.23mip10019@vitbhopal.ac.in
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Phone:</p>
                <a 
                  href="tel:+91 6380498136"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  +91 6380498136
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Address:</p>
                <p>Kotri Kalan, <br />Ashta, Near, Indore Road<br />Bhopal, Madhya Pradesh 466114</p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Stay Connected</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Follow us for updates, announcements, and behind-the-scenes content.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center text-muted-foreground ${social.color} transition-colors duration-300 hover:bg-card border border-border hover:border-primary/30`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2025 Data Science Club Summit. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Made with ❤️ for the data science community
              </p>
            </div>
            
            <div className="flex space-x-6 text-xs">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Code of Conduct
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full opacity-30 animate-float" />
      <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-accent rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }} />
    </footer>
  );
};

export default Footer;