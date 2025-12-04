import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, Target, Users, Award, Lightbulb } from "lucide-react";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower rubber farmers with technology, ensuring fair pricing and transparent grading for sustainable agricultural growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Combining AI and IoT for smarter grading, using advanced computer vision and sensor technology for precise quality assessment."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Connecting farmers and merchants transparently, building trust through consistent and reliable grading standards."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Consistent grading and pricing based on live data, ensuring accuracy and fairness in every transaction."
    }
  ];

  const team = [
    {
      name: "Anaga M S",
      role: "7th sem CS",
      image: "👨‍🎓"
    },
    {
      name: "Akhila M",
      role: "7th sem CS",
      image: "👨‍🎓"
    },
    {
      name: "Brunda K G",
      role: "7th sem CS",
      image: "👨‍🎓"
    },
    {
      name: "Madan S P",
      role: "7th sem CS",
      image: "👨‍🎓"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="mb-8 text-gray-600 hover:text-[#2E7D32]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming the rubber industry through intelligent automation and fair pricing
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Card className="shadow-2xl">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl text-gray-900 mb-6">The Beginning</h2>
                  <div className="space-y-4 text-gray-600 text-lg">
                    <p>
                      We started <span className="text-[#2E7D32]">RubberSheetGrading</span> as a major engineering project in 2025 at our college. 
                      Our mission was to simplify the rubber sheet grading process using AI and IoT 
                      to help farmers and merchants achieve fair pricing.
                    </p>
                    <p>
                      As engineering students passionate about solving real-world problems, we witnessed 
                      firsthand how rubber farmers in Karnataka struggled with inconsistent grading 
                      and pricing. This motivated us to combine our technical skills to create 
                      a solution that could make a difference.
                    </p>
                    <p>
                      Today, we continue improving it with real-time data integration and smart analytics, 
                      making rubber sheet grading more accessible, accurate, and fair for everyone in the industry.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-3xl shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌱</div>
                    <h3 className="text-2xl text-gray-900 mb-6">Impact to Date</h3>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="text-3xl text-[#2E7D32]">1000+</div>
                        <div className="text-sm text-gray-600 mt-1">Farmers Benefited</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="text-3xl text-[#2E7D32]">15,000+</div>
                        <div className="text-sm text-gray-600 mt-1">Rubber Sheets Graded</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="text-3xl text-[#2E7D32]">98.5%</div>
                        <div className="text-sm text-gray-600 mt-1">Accuracy Percentage</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="text-3xl text-[#2E7D32]">₹50L+</div>
                        <div className="text-sm text-gray-600 mt-1">Fair Value Ensured</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Drives Us */}
        <div className="mb-20">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-transparent hover:border-[#2E7D32]">
                  <CardContent className="p-8">
                    <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#2E7D32]" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-4xl text-gray-900 mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Engineering Students Behind the Innovation</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-[#2E7D32]">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-2xl bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute inset-0 bg-white opacity-5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl mb-4">Ready to Experience Fair Grading?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join us in revolutionizing rubber sheet grading with technology
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => onNavigate('upload')}
                    className="bg-white text-[#2E7D32] hover:bg-gray-100"
                  >
                    Try Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate('contact')}
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2E7D32]"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
