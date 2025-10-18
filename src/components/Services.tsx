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
      description: "Our advisory partnership guides international students through their entire study abroad journey, ensuring a smoother and less stressful transition.",
      features: ["University & School Applications", "Visa & Language Test Support", "Scholarships & Funding", "Housing & Cultural Adjustment"]
    },
    {
      icon: Plane,
      title: "Travel & Tourism Consulting",
      description: "Strategic guidance for travel and tourism businesses to streamline operations, enhance customer experience, and achieve sustainable growth.",
      features: ["Booking & Invoicing System Advice", "Risk Management & Crisis Prep", "Eco-Tourism & Sustainability", "Partnerships & Vendor Negotiation"]
    },
    {
      icon: CreditCard,
      title: "Banking & Insurance Solutions",
      description: "Expert advisory helping individuals, families, newcomers, and small businesses access the right financial products with confidence and clarity.",
      features: ["Loan & Insurance Needs Assessment", "Financial Literacy & Credit Repair", "Documentation & Compliance Support", "Risk Management & Debt Restructuring"]
    },
    {
      icon: Users,
      title: "Non-Profit & NGO Advisory",
      description: "Empowering non-profits and NGOs to maximize their impact through strategic planning, resource mobilization, and capacity building support.",
      features: ["Fundraising Strategy & Grant Applications", "Donor & Stakeholder Engagement", "Governance & Compliance", "Digital Adoption & Advocacy"]
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