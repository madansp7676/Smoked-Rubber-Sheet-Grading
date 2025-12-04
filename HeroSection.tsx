import { Button } from "./ui/button";
import { Upload, TrendingUp, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1637552481611-1f36222fb188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWJiZXIlMjB0cmVlJTIwcGxhbnRhdGlvbiUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1ODY0MjM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Rubber tree plantation"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Smart Rubber Sheet
              <span className="text-green-600 block">Grading & Pricing</span>
              <span className="block">System</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Revolutionary AI-powered grading system using Raspberry Pi technology 
              to accurately assess rubber sheet quality and provide real-time market pricing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => onNavigate('login')}
                className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('technology')}
                className="border-[#2E7D32] text-[#2E7D32] hover:bg-green-50 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-green-100">
              <div className="text-center">
                <div className="text-2xl text-[#2E7D32] mb-1">98.5%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-[#2E7D32] mb-1">1K+</div>
                <div className="text-sm text-gray-600">Sheets Graded</div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-green-100 rounded-3xl p-8 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1678799021566-2e2a748e9dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcnViYmVyJTIwc2hlZXRzJTIwcHJvY2Vzc2luZ3xlbnwxfHx8fDE3NTg2NDIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Natural rubber sheets processing"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-[#2E7D32] text-sm">RSS Grade: RSS1</div>
                <div className="text-gray-600 text-xs">Moisture: 12%</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-[#2E7D32] text-sm">Price: ₹185/kg</div>
                <div className="text-gray-600 text-xs">Market Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}