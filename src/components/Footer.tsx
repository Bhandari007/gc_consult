import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      "University Selection",
      "Application Assistance", 
      "Visa Support",
      "Financial Planning",
      "Country Selection",
      "Pre-Departure Support"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Case Studies",
      "News & Insights",
      "Contact"
    ],
    resources: [
      "Study Guides",
      "Country Guides",
      "Scholarship Database",
      "University Rankings",
      "Student Stories",
      "FAQ"
    ]
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">
              GC Connecting Services
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Guiding students from Nepal, Canada, India, and Bangladesh to achieve 
              their study abroad dreams through trusted advice and expert support.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-secondary" />
                <span>info@gcconnectingservices.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-secondary" />
                <span>123 Business District<br />New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest study abroad tips and education updates delivered to your inbox.
            </p>
            <div className="flex gap-2 mb-4">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button size="sm" className="btn-secondary">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 GC Connecting Services. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-secondary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-secondary transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;