import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "../hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Calendar,
  Users,
  Sparkles
} from "lucide-react";
import axios from "axios";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  
  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit contact form
      await axios.post(`${BACKEND_URL}/api/contact`, formData);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        timeline: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 88892 23772",
      subDetails: "Mon-Fri 9AM-6PM IST",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@drag-ai.com",
      subDetails: "We respond within 24 hours",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Bangalore, India",
      subDetails: "Global delivery capabilities",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Availability",
      details: "24/7 Support",
      subDetails: "Round-the-clock assistance",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    "AI/ML Consulting",
    "Data Engineering",
    "Predictive Analytics",
    "Custom AI Development",
    "Computer Vision",
    "Generative AI",
    "Other"
  ];

  const budgetRanges = [
    "< $50K",
    "$50K - $100K",
    "$100K - $250K",
    "$250K - $500K",
    "$500K+",
    "Discuss with team"
  ];

  const timelines = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Flexible"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
            <span className="block gradient-text">Let's Start the Conversation</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Schedule a free consultation to discover how AI can revolutionize your operations, 
            boost efficiency, and unlock new revenue streams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-blue-600" />
                  Tell Us About Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company Name"
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Project timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project, challenges you're facing, and goals you want to achieve..."
                      rows={5}
                      required
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center shadow-medium`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          <p className="text-gray-700">{info.details}</p>
                          <p className="text-sm text-gray-500">{info.subDetails}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft border-0 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Meet the Team
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Live Chat Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="shadow-soft border-0 bg-gradient-to-br from-green-50 to-teal-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 2 hours during business hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;