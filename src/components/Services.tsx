import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb, 
  BarChart3, 
  Shield,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description: "Comprehensive strategic planning to drive sustainable growth and competitive advantage in your market.",
      features: ["Market Analysis", "Competitive Positioning", "Growth Planning"]
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Transform your team structure and culture to maximize productivity and employee engagement.",
      features: ["Team Optimization", "Leadership Development", "Culture Transformation"]
    },
    {
      icon: Target,
      title: "Operational Excellence",
      description: "Streamline processes and improve efficiency to reduce costs and enhance customer satisfaction.",
      features: ["Process Optimization", "Quality Management", "Performance Metrics"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Foster innovation culture and implement cutting-edge solutions to stay ahead of competition.",
      features: ["Innovation Strategy", "Digital Transformation", "Technology Integration"]
    },
    {
      icon: BarChart3,
      title: "Financial Advisory",
      description: "Expert financial guidance to optimize cash flow, investments, and long-term financial health.",
      features: ["Financial Planning", "Investment Strategy", "Risk Management"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify, assess, and mitigate business risks to protect your organization's future.",
      features: ["Risk Assessment", "Compliance", "Crisis Management"]
    }
  ];

  return (
    <section id="services" className="section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive consulting services designed to address every aspect 
            of your business challenges and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-2 slide-up border-0 shadow-elegant" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-heading text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="btn-ghost group w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We create tailored strategies for unique business challenges.
          </p>
          <Button size="lg" className="btn-primary">
            Discuss Custom Solution
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;