import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  FileText, 
  Globe, 
  CreditCard, 
  Plane, 
  Users,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Expert guidance to choose the best universities and programs that match your academic goals and career aspirations.",
      features: ["Program Matching", "University Rankings", "Career Alignment"]
    },
    {
      icon: FileText,
      title: "Application Assistance",
      description: "Complete support with application documents including SOP, recommendation letters, and personal statements.",
      features: ["SOP Writing", "Document Review", "Application Tracking"]
    },
    {
      icon: Globe,
      title: "Country Selection",
      description: "Help you choose the ideal study destination based on your preferences, budget, and career goals.",
      features: ["Country Comparison", "Cost Analysis", "Career Prospects"]
    },
    {
      icon: CreditCard,
      title: "Financial Planning",
      description: "Comprehensive guidance on education loans, scholarships, and financial planning for your studies abroad.",
      features: ["Loan Assistance", "Scholarship Search", "Budget Planning"]
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description: "End-to-end visa application support with document preparation and interview coaching.",
      features: ["Visa Documentation", "Interview Prep", "Application Tracking"]
    },
    {
      icon: Users,
      title: "Pre-Departure Support",
      description: "Complete preparation for your journey including accommodation, travel, and cultural orientation.",
      features: ["Accommodation Help", "Travel Planning", "Cultural Orientation"]
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
            We provide comprehensive education consulting services to guide you through 
            every step of your study abroad journey.
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
            Ready to start your study abroad journey? Let's discuss your educational goals and create a personalized plan.
          </p>
          <Button size="lg" className="btn-primary">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;