import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { 
  TrendingUp, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield,
  Clock,
  Star
} from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    accuracy: 0,
    industries: 0,
    experience: 0,
    satisfaction: 0
  });

  const sectionRef = useRef(null);

  const finalValues = {
    projects: 500,
    clients: 150,
    accuracy: 98,
    industries: 15,
    experience: 8,
    satisfaction: 99
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        projects: Math.floor(finalValues.projects * easeOutQuart),
        clients: Math.floor(finalValues.clients * easeOutQuart),
        accuracy: Math.floor(finalValues.accuracy * easeOutQuart),
        industries: Math.floor(finalValues.industries * easeOutQuart),
        experience: Math.floor(finalValues.experience * easeOutQuart),
        satisfaction: Math.floor(finalValues.satisfaction * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: TrendingUp,
      value: counters.projects,
      suffix: "+",
      label: "AI Projects Delivered",
      description: "Successfully deployed across industries",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Users,
      value: counters.clients,
      suffix: "+",
      label: "Global Clients",
      description: "From startups to Fortune 500",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Award,
      value: counters.accuracy,
      suffix: "%",
      label: "Average Accuracy",
      description: "In our AI model predictions",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: Globe,
      value: counters.industries,
      suffix: "+",
      label: "Industries Served",
      description: "Diverse sector expertise",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Clock,
      value: counters.experience,
      suffix: "+",
      label: "Years Experience",
      description: "In AI and machine learning",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon: Star,
      value: counters.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently high ratings",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with enterprise-grade security protocols"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Average 30% faster time-to-market compared to industry standards"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Featured in Forbes AI 50 and Gartner Magic Quadrant"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Impact by Numbers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results That
            <span className="block gradient-text">Speak for Themselves</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Our track record demonstrates consistent delivery of high-impact AI solutions 
            that drive real business transformation and measurable ROI.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className={`text-center p-6 lg:p-8 hover-lift border-0 shadow-soft hover:shadow-medium transition-all duration-500 bg-gradient-to-br ${stat.bgGradient}`}
              >
                <CardContent className="p-0">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-4 shadow-medium`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                      {stat.value}
                    </span>
                    <span className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Leading Companies Choose Us
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond impressive numbers, we deliver quality, security, and innovation 
              that sets new industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-4 shadow-medium">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Amazon</div>
            <div className="text-2xl font-bold text-gray-400">IBM</div>
            <div className="text-2xl font-bold text-gray-400">Oracle</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;