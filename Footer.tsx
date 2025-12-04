import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Upload & Grade', id: 'upload' },
    { name: 'Technology', id: 'technology' },
    { name: 'Dashboard', id: 'dashboard' },
  ];

  const resources = [
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
    { name: 'Support', id: 'support' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#2E7D32] p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl">RubberSheetGrading</span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionary AI-powered rubber sheet grading system ensuring fair pricing 
              and quality assurance for farmers and buyers.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2E7D32] transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2E7D32] transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2E7D32] transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-[#2E7D32] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.id}>
                  <button
                    onClick={() => onNavigate(resource.id)}
                    className="text-gray-400 hover:text-[#2E7D32] transition-colors text-sm"
                  >
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#2E7D32]" />
                <span className="text-gray-400 text-sm">madansettajana@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#2E7D32]" />
                <span className="text-gray-400 text-sm">+91 9008453654</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#2E7D32]" />
                <span className="text-gray-400 text-sm">Sullia, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} RubberSheetGrading. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-[#2E7D32] transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-[#2E7D32] transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-[#2E7D32] transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
