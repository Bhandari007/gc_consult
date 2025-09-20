import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechVision Inc.",
      content: "Strategic Consulting transformed our business model and helped us achieve 300% growth in just 18 months. Their expertise in digital transformation was exactly what we needed.",
      rating: 5,
      company: "TechVision Inc."
    },
    {
      name: "Michael Chen",
      title: "Founder, GreenTech Solutions",
      content: "The team's strategic insights and hands-on approach helped us navigate a critical market shift. Their recommendations saved us millions and positioned us as industry leaders.",
      rating: 5,
      company: "GreenTech Solutions"
    },
    {
      name: "Emily Rodriguez",
      title: "COO, Global Manufacturing",
      content: "Working with Strategic Consulting was a game-changer. They optimized our operations, reduced costs by 40%, and improved our customer satisfaction scores significantly.",
      rating: 5,
      company: "Global Manufacturing"
    },
    {
      name: "David Park",
      title: "VP Strategy, FinanceFirst",
      content: "Their financial advisory services helped us restructure our portfolio and identify new investment opportunities. ROI improved by 250% within the first year.",
      rating: 5,
      company: "FinanceFirst"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            the transformational results we've achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="slide-up shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border-0" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-8 w-8 text-secondary opacity-60" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-primary text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-secondary font-medium mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white fade-in">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business and achieve 
            breakthrough results together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg">
              Schedule Consultation
            </button>
            <button className="btn-outline px-8 py-4 text-lg font-semibold rounded-lg border-white text-white hover:bg-white hover:text-primary">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;