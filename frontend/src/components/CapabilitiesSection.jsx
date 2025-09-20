import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Sparkles, 
  Eye, 
  Building2, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Target,
  Globe
} from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Sparkles,
      title: "Generative AI & LLM Mastery",
      description: "Harness the transformative power of Large Language Models to automate content creation, enable intelligent conversations, and revolutionize human-AI collaboration.",
      benefits: [
        "Custom ChatGPT-like solutions",
        "Automated content generation",
        "Code generation & review",
        "Intelligent document analysis",
        "Multi-language support"
      ],
      gradient: "from-violet-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      stats: { value: "10x", label: "Faster Content Creation" }
    },
    {
      icon: Eye,
      title: "Advanced Computer Vision",
      description: "Transform visual data into actionable insights with state-of-the-art computer vision systems that see, understand, and act with superhuman precision.",
      benefits: [
        "Real-time object detection",
        "Facial recognition systems",
        "Quality control automation",
        "Medical image analysis",
        "Autonomous vehicle vision"
      ],
      gradient: "from-blue-500 to-cyan-600",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      stats: { value: "99.9%", label: "Accuracy Rate" }
    },
    {
      icon: Building2,
      title: "Enterprise AI Integration",
      description: "Seamlessly integrate AI into complex enterprise ecosystems with scalable, secure, and compliant solutions that grow with your business.",
      benefits: [
        "Legacy system integration",
        "Cloud-native architecture",
        "Regulatory compliance",
        "Enterprise security",
        "Scalable infrastructure"
      ],
      gradient: "from-emerald-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      stats: { value: "500+", label: "Enterprise Deployments" }
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", projects: "120+" },
    { name: "Finance", icon: "🏦", projects: "85+" },
    { name: "Manufacturing", icon: "🏭", projects: "95+" },
    { name: "Retail", icon: "🛍️", projects: "150+" },
    { name: "Education", icon: "🎓", projects: "75+" },
    { name: "Energy", icon: "⚡", projects: "60+" },
  ];

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Core Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where Innovation Meets
            <span className="block gradient-text">Practical Excellence</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Our deep expertise spans the entire AI landscape, from cutting-edge research 
            to production-ready solutions that deliver real business impact.
          </p>
        </div>

        {/* Capabilities Cards */}
        <div className="space-y-12 mb-20">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-500">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:direction-rtl' : ''}`}>
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-full overflow-hidden">
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-85`}></div>
                      
                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-white mb-1">
                            {capability.stats.value}
                          </div>
                          <div className="text-white/90 text-sm">
                            {capability.stats.label}
                          </div>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute top-6 right-6">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:direction-ltr' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {capability.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {capability.description}
                      </p>

                      {/* Benefits List */}
                      <div className="space-y-3 mb-8">
                        {capability.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className={`w-5 h-5 text-gradient bg-gradient-to-r ${capability.gradient} rounded-full`} />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        className={`self-start border-2 hover:bg-gradient-to-r ${capability.gradient} hover:text-white hover:border-transparent transition-all duration-300`}
                      >
                        Explore Capability
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industries Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Industry Impact</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Industries Worldwide
            </h3>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From Fortune 500 enterprises to innovative startups, we've delivered 
              AI solutions across every major industry vertical.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover-lift bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{industry.name}</h4>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {industry.projects}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;