import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Students Placed" },
    { icon: Globe, value: "25+", label: "Countries" },
    { icon: Award, value: "8", label: "Years Experience" },
    { icon: TrendingUp, value: "95%", label: "Visa Success Rate" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We deliver exceptional guidance through proven methodologies and deep multi-domain expertise."
    },
    {
      title: "Trust",
      description: "Transparency and honest advice form the foundation of every client relationship across all sectors."
    },
    {
      title: "Impact",
      description: "From students achieving their dreams to NGOs expanding their reach—we measure success by your results."
    },
    {
      title: "Partnership",
      description: "We work alongside you as strategic partners, committed to your long-term growth and success."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              About GC Connecting Services
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 8 years, GC Connecting Services has been a trusted multi-domain consulting firm 
              serving students, businesses, and organizations across Education, Travel & Tourism, 
              Banking & Insurance, and Non-Profit sectors.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              While our flagship service remains International Student Advisory—helping students from 
              Nepal, Canada, India, and Bangladesh achieve their study abroad dreams—we've expanded to 
              offer strategic consulting that empowers travel businesses, financial institutions, and NGOs 
              to achieve sustainable growth and meaningful impact.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="btn-primary">
              Meet Our Team
            </Button>
          </div>

          <div className="slide-up">
            <div className="bg-gradient-subtle rounded-2xl p-8 shadow-elegant-lg">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Our Core Values
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <Card key={value.title} className="border-0 shadow-elegant" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;