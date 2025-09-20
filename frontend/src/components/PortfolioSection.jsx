import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Zap, 
  Award, 
  Clock,
  CheckCircle
} from "lucide-react";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI-Powered Investment Platform",
      category: "fintech",
      industry: "Financial Services",
      description: "Revolutionary trading platform using machine learning algorithms to predict market trends and optimize investment portfolios with 94% accuracy.",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-blue-500 to-cyan-500",
      metrics: [
        { icon: TrendingUp, value: "94%", label: "Prediction Accuracy" },
        { icon: Users, value: "50K+", label: "Active Users" },
        { icon: Zap, value: "40%", label: "Faster Execution" }
      ],
      technologies: ["Deep Learning", "NLP", "Real-time Analytics", "Cloud Computing"],
      results: [
        "Increased trading accuracy by 94%",
        "Reduced manual processing by 85%",
        "Generated $2M+ additional revenue"
      ]
    },
    {
      id: 2,
      title: "Smart Manufacturing Analytics",
      category: "manufacturing",
      industry: "Manufacturing",
      description: "Computer vision-powered quality control system that detects defects in real-time, reducing waste and improving production efficiency.",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-green-500 to-teal-500",
      metrics: [
        { icon: Award, value: "99.8%", label: "Quality Score" },
        { icon: Clock, value: "60%", label: "Faster Detection" },
        { icon: TrendingUp, value: "45%", label: "Cost Reduction" }
      ],
      technologies: ["Computer Vision", "IoT Integration", "Edge Computing", "Predictive Analytics"],
      results: [
        "Reduced defect rates by 85%",
        "Improved efficiency by 60%",
        "Saved $1.5M annually"
      ]
    },
    {
      id: 3,
      title: "Healthcare Diagnostic AI",
      category: "healthcare",
      industry: "Healthcare",
      description: "Advanced medical imaging AI that assists radiologists in early disease detection, improving diagnostic accuracy and patient outcomes.",
      image: "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-purple-500 to-pink-500",
      metrics: [
        { icon: Award, value: "96%", label: "Diagnostic Accuracy" },
        { icon: Clock, value: "70%", label: "Faster Diagnosis" },
        { icon: Users, value: "25K+", label: "Patients Served" }
      ],
      technologies: ["Medical AI", "Deep Learning", "Image Processing", "HIPAA Compliance"],
      results: [
        "Improved early detection by 40%",
        "Reduced diagnosis time by 70%",
        "Enhanced patient outcomes"
      ]
    },
    {
      id: 4,
      title: "Retail Personalization Engine",
      category: "retail",
      industry: "E-commerce",
      description: "AI-driven recommendation system that personalizes shopping experiences, increasing customer engagement and conversion rates.",
      image: "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-orange-500 to-red-500",
      metrics: [
        { icon: TrendingUp, value: "180%", label: "Conversion Boost" },
        { icon: Users, value: "1M+", label: "Customers" },
        { icon: Zap, value: "65%", label: "Engagement Increase" }
      ],
      technologies: ["Recommendation AI", "Behavioral Analytics", "A/B Testing", "Real-time Processing"],
      results: [
        "Boosted sales by 180%",
        "Increased engagement by 65%",
        "Improved customer satisfaction"
      ]
    },
    {
      id: 5,
      title: "Smart Energy Optimization",
      category: "energy",
      industry: "Energy & Utilities",
      description: "IoT and AI-powered energy management system that optimizes consumption patterns and reduces costs for enterprise clients.",
      image: "https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-yellow-500 to-orange-500",
      metrics: [
        { icon: TrendingUp, value: "35%", label: "Energy Savings" },
        { icon: Zap, value: "24/7", label: "Monitoring" },
        { icon: Award, value: "99.9%", label: "Uptime" }
      ],
      technologies: ["IoT Sensors", "Predictive Analytics", "Machine Learning", "Cloud Platform"],
      results: [
        "Reduced energy costs by 35%",
        "Optimized consumption patterns",
        "Achieved carbon footprint goals"
      ]
    },
    {
      id: 6,
      title: "Educational AI Assistant",
      category: "education",
      industry: "Education Technology",
      description: "Intelligent tutoring system that adapts to individual learning styles, providing personalized educational experiences at scale.",
      image: "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-indigo-500 to-purple-500",
      metrics: [
        { icon: Users, value: "100K+", label: "Students" },
        { icon: TrendingUp, value: "85%", label: "Learning Improvement" },
        { icon: Award, value: "4.9/5", label: "User Rating" }
      ],
      technologies: ["Natural Language Processing", "Adaptive Learning", "Content Generation", "Analytics"],
      results: [
        "Improved learning outcomes by 85%",
        "Reduced teacher workload by 50%",
        "Increased student engagement"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "fintech", label: "FinTech", count: projects.filter(p => p.category === "fintech").length },
    { id: "healthcare", label: "Healthcare", count: projects.filter(p => p.category === "healthcare").length },
    { id: "manufacturing", label: "Manufacturing", count: projects.filter(p => p.category === "manufacturing").length },
    { id: "retail", label: "Retail", count: projects.filter(p => p.category === "retail").length },
    { id: "energy", label: "Energy", count: projects.filter(p => p.category === "energy").length },
    { id: "education", label: "Education", count: projects.filter(p => p.category === "education").length },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Businesses with
            <span className="block gradient-text">AI Excellence</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how we've helped industry leaders achieve breakthrough results 
            through innovative AI solutions that deliver measurable impact.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-white/60 backdrop-blur-sm p-2 rounded-2xl shadow-soft">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white px-4 py-2 rounded-xl font-medium transition-all duration-300"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 bg-white/20 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover-lift bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                
                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30">
                    {project.industry}
                  </Badge>
                </div>

                {/* View Project Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.metrics.map((metric, idx) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="flex justify-center mb-1">
                          <IconComponent className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Key Results */}
                <div className="space-y-1 mb-4">
                  {project.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can transform your business with cutting-edge AI solutions.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;