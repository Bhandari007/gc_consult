import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      title: "MBA Student at Stanford University",
      content: "GC Connecting Services made my dream of studying at Stanford a reality. Their guidance on university selection and application process was exceptional. I got accepted with a scholarship!",
      rating: 5,
      country: "From India"
    },
    {
      name: "Raj Patel",
      title: "Engineering Student at University of Toronto",
      content: "The team helped me navigate the complex Canadian education system. From visa application to finding accommodation, they supported me throughout my journey to Canada.",
      rating: 5,
      country: "From Nepal"
    },
    {
      name: "Fatima Rahman",
      title: "Master's Student at University of Melbourne",
      content: "Thanks to GC Connecting Services, I'm now pursuing my Master's in Australia. Their financial planning advice helped me secure education loan and manage my budget effectively.",
      rating: 5,
      country: "From Bangladesh"
    },
    {
      name: "Sarah Thompson",
      title: "PhD Student at Oxford University",
      content: "Their expertise in UK education system was invaluable. The team helped me craft a compelling SOP and prepared me for interviews. I'm now doing my PhD at Oxford!",
      rating: 5,
      country: "From Canada"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our students who have successfully achieved their study abroad 
            dreams with our guidance and support.
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
                    {testimonial.country}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white fade-in">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to Start Your Study Abroad Journey?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their dreams 
            of studying abroad with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg">
              Book Free Consultation
            </button>
            <button className="btn-outline px-8 py-4 text-lg font-semibold rounded-lg border-white text-white hover:bg-white hover:text-primary">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;