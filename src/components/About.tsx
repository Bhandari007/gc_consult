import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Award, value: "15", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We deliver exceptional results through rigorous methodology and deep expertise."
    },
    {
      title: "Integrity",
      description: "Trust and transparency form the foundation of every client relationship."
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge solutions to solve complex business challenges."
    },
    {
      title: "Partnership",
      description: "Your success is our success. We work as an extension of your team."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              About Strategic Consulting
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, we've been the trusted partner for businesses seeking 
              transformational growth. Our team of seasoned consultants brings together 
              deep industry expertise and proven methodologies to deliver results that matter.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that every business has untapped potential. Our mission is to 
              unlock that potential through strategic thinking, innovative solutions, 
              and relentless execution.
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