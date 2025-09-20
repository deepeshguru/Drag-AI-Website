import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Brain, 
  Database, 
  TrendingUp, 
  Cpu, 
  Eye, 
  Shield, 
  Zap, 
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Consulting & Strategy",
      description: "Transform your business vision into intelligent reality. We architect comprehensive AI strategies that align with your goals and deliver measurable ROI.",
      features: ["AI Readiness Assessment", "Custom AI Roadmaps", "Technology Selection", "ROI Optimization"],
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Database,
      title: "Next-Gen Data Engineering",
      description: "Build unbreakable data foundations. Our cloud-native pipelines ensure your AI systems run on pristine, real-time data streams.",
      features: ["Real-time Data Pipelines", "Cloud Architecture", "Data Lake Design", "ETL Automation"],
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: TrendingUp,
      title: "Predictive Intelligence",
      description: "See the future before it happens. Our predictive models turn uncertainty into competitive advantage through advanced forecasting.",
      features: ["Demand Forecasting", "Risk Prediction", "Market Analysis", "Customer Behavior"],
      gradient: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Cpu,
      title: "Custom AI Development",
      description: "From breakthrough concepts to enterprise-scale platforms. We engineer AI solutions that learn, adapt, and evolve with your business.",
      features: ["Custom ML Models", "AI-Powered Apps", "API Development", "System Integration"],
      gradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Give your systems the power of sight. Advanced computer vision that recognizes, analyzes, and acts on visual data in real-time.",
      features: ["Object Detection", "Image Recognition", "Video Analytics", "Quality Control"],
      gradient: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Zap,
      title: "Generative AI Integration",
      description: "Harness the creative power of AI. From content generation to code automation, we implement LLMs that amplify human potential.",
      features: ["LLM Integration", "Content Generation", "Code Automation", "Conversational AI"],
      gradient: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Enterprise-Grade Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionize Your Business with
            <span className="block gradient-text">Cutting-Edge AI Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            We don't just build AI—we architect intelligent ecosystems that transform industries, 
            optimize operations, and create unprecedented competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover-lift bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to transform your business with AI? Let's build something extraordinary together.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
          >
            Start Your AI Transformation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;