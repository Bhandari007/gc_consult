import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional consulting environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white fade-in">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Multi-Domain Consulting 
              <span className="text-secondary"> Expertise You Can Trust</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              From study abroad guidance to tourism, financial, and NGO advisory—GC Connecting Services 
              delivers strategic consulting across Education, Travel, Banking, and Non-Profit sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Get Free Study Abroad Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Explore Programs
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span>1000+ Students Guided</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span>Multi-Domain Expertise</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span>Trusted by Businesses & NGOs</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block slide-up">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                Free Consultation
              </h3>
              <p className="text-gray-200 mb-6">
                Discover how our consulting services can help you achieve your goals—education, business, or impact.
              </p>
              <Button className="btn-secondary w-full">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;