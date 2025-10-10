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
      title: "International Student Advisory",
      description: "Our flagship service guiding students from Nepal, Canada, India, and Bangladesh through their entire study abroad journey with personalized support.",
      features: ["University Applications", "Visa & IELTS Support", "Scholarships & Housing", "Cultural Adjustment"]
    },
    {
      icon: Plane,
      title: "Travel & Tourism Consulting",
      description: "Strategic consulting for travel and tourism businesses to streamline operations, enhance customer experience, and achieve sustainable growth.",
      features: ["Booking & Invoicing Systems", "Eco-Tourism Support", "Risk Management", "Partnership Development"]
    },
    {
      icon: CreditCard,
      title: "Banking & Insurance Solutions",
      description: "Expert advisory helping individuals, families, and small businesses access the right financial products with confidence and clarity.",
      features: ["Loan & Insurance Access", "Financial Literacy", "Documentation Support", "Risk Management"]
    },
    {
      icon: Users,
      title: "Non-Profit & NGO Advisory",
      description: "Empowering NGOs and non-profits to maximize their impact through strategic fundraising, compliance, and capacity building support.",
      features: ["Fundraising Strategy", "Donor Engagement", "Compliance & Governance", "Digital Adoption"]
    }
  ];

  return (
    <section id="services" className="section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our Consulting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From international education to tourism, finance, and non-profit sectors—we deliver 
            trusted expertise and strategic guidance across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
            Whether you're a student, business, or organization—let's work together to achieve your goals with expert guidance.
          </p>
          <Button size="lg" className="btn-primary">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;