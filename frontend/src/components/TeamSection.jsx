import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Users, 
  Award,
  BookOpen,
  Briefcase
} from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Nishit Gupta",
      role: "Co-Founder & Business Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-blue-500 to-cyan-500",
      expertise: ["Business Strategy", "AI Implementation", "Enterprise Solutions"],
      description: "Visionary leader with 10+ years of experience in transforming businesses through strategic AI adoption. Expert in scaling AI solutions from concept to enterprise deployment.",
      achievements: [
        "Led 200+ successful AI implementations",
        "Featured speaker at AI World Conference",
        "Forbes 30 Under 30 in Technology"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "nishit@drag-ai.com"
      }
    },
    {
      name: "Deepesh Agrawal",
      role: "Co-Founder & Technical Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-purple-500 to-pink-500",
      expertise: ["Machine Learning", "Deep Learning", "Computer Vision"],
      description: "Technical mastermind with deep expertise in cutting-edge AI technologies. Specializes in building scalable ML systems that deliver real-world impact.",
      achievements: [
        "PhD in Machine Learning from MIT",
        "20+ research papers published",
        "Former Google AI Research Scientist"
      ],
      social: {
        linkedin: "#",
        github: "#",
        email: "deepesh@drag-ai.com"
      }
    },
    {
      name: "Dr. Sarah Chen",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-green-500 to-teal-500",
      expertise: ["NLP", "Generative AI", "Research & Development"],
      description: "Leading AI researcher driving innovation in natural language processing and generative AI. Pioneering next-generation AI solutions for enterprise applications.",
      achievements: [
        "Former OpenAI Research Lead",
        "50+ patents in AI technology",
        "ACM Fellow recognition"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@drag-ai.com"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Principal Data Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-orange-500 to-red-500",
      expertise: ["Data Architecture", "Cloud Computing", "MLOps"],
      description: "Expert in building robust data infrastructure that powers AI at scale. Specializes in cloud-native solutions and MLOps best practices.",
      achievements: [
        "Architected systems processing 100TB+ daily",
        "AWS Solutions Architect Expert",
        "Speaker at Data Engineering Summit"
      ],
      social: {
        linkedin: "#",
        github: "#",
        email: "marcus@drag-ai.com"
      }
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Ethics & Compliance Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-indigo-500 to-purple-500",
      expertise: ["AI Ethics", "Regulatory Compliance", "Risk Management"],
      description: "Ensuring responsible AI development and deployment. Expert in navigating complex regulatory landscapes and implementing ethical AI frameworks.",
      achievements: [
        "PhD in AI Ethics from Stanford",
        "Advisor to EU AI Act Committee",
        "Author of 'Responsible AI' bestseller"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@drag-ai.com"
      }
    },
    {
      name: "David Kim",
      role: "Head of Product Strategy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-yellow-500 to-orange-500",
      expertise: ["Product Management", "UX Design", "Market Strategy"],
      description: "Product visionary who bridges the gap between cutting-edge AI technology and user needs. Expert in building AI products that users love.",
      achievements: [
        "Former Head of Product at DeepMind",
        "Launched 5 successful AI products",
        "Product Management Hall of Fame"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@drag-ai.com"
      }
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "25+", label: "PhD Experts" },
    { icon: BookOpen, value: "100+", label: "Research Papers" },
    { icon: Briefcase, value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Meet the Innovators</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Minds Behind
            <span className="block gradient-text">AI Innovation</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Our world-class team of AI researchers, engineers, and strategists brings together 
            decades of experience from leading tech companies and academic institutions.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover-lift bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden">
              {/* Member Image & Gradient */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-80`}></div>
                
                {/* Social Links Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.linkedin && (
                    <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white w-8 h-8">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white w-8 h-8">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  )}
                  {member.social.github && (
                    <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white w-8 h-8">
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {/* Contact Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="ghost" 
                    className="w-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Name & Role */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  {member.achievements.slice(0, 2).map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                      <Award className="w-3 h-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Our World-Class Team
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for exceptional talent to join our mission of 
              transforming businesses through AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;