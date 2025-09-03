import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, User, Mail, Building, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const pricingTiers = [
    {
      name: "Student",
      price: "₹199",
      description: "Perfect for students and academics",
      features: [
        "Access to all sessions",
        "Digital materials",
        "Networking opportunities",
        "Certificate of attendance"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "₹350",
      description: "For industry professionals",
      features: [
        "Everything in Student",
        "Workshop materials",
        "Lunch included",
        "Priority seating",
        "Access to recordings"
      ],
      highlight: true
    },
    {
      name: "Corporate",
      price: "₹500",
      description: "For teams and enterprises",
      features: [
        "Everything in Professional",
        "VIP networking session",
        "1-on-1 speaker meetings",
        "Custom certificates",
        "Early access to next year"
      ],
      highlight: false
    }
  ];

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 200
            }}
            className="card-glow p-12 max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow"
            >
              <Check className="h-10 w-10 text-primary-foreground" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-gradient mb-4"
            >
              Registration Successful!
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mb-6"
            >
              Thank you for registering for the Data Science Club Summit 2025! 
              You'll receive a confirmation email shortly with all the event details.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground"
            >
              <p>We're excited to see you at the summit!</p>
              <p className="mt-2">Check your email for next steps and updates.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
            Register Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your spot at the premier data science event of the year. 
            Choose the ticket type that best fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card-glow p-8 relative ${
                tier.highlight ? 'ring-2 ring-primary shadow-glow scale-105' : ''
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-glow">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-gradient mb-2">
                  {tier.price}
                </div>
                <p className="text-muted-foreground mb-6">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlight ? 'hero' : 'secondary_glow'}
                className="w-full"
                onClick={() => {
                  const element = document.querySelector('#registration-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Choose {tier.name}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
          id="registration-form"
        >
          <div className="card-glow p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                Complete Your Registration
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below to secure your spot at the summit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 bg-muted/20 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 bg-muted/20 border-border focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="text-foreground">
                  Organization/Company *
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    placeholder="Your company or university"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="pl-10 bg-muted/20 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-foreground">
                  Role/Position *
                </Label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md bg-muted/20 border border-border focus:border-primary focus:outline-none text-foreground"
                >
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="researcher">Researcher</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="ml-engineer">ML Engineer</option>
                  <option value="analyst">Data Analyst</option>
                  <option value="manager">Manager</option>
                  <option value="executive">Executive</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isLoading}
                className="w-full group"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Complete Registration</span>
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              By registering, you agree to our terms and conditions and privacy policy.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;