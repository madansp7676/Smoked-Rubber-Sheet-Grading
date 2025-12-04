import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Camera, Cpu, Droplets, ArrowRight, ArrowLeft, Zap, CheckCircle, Code, Database, Wifi } from "lucide-react";

interface TechnologySectionProps {
  onNavigate: (page: string) => void;
}

export function TechnologySection({ onNavigate }: TechnologySectionProps) {
  const techStack = [
    {
      icon: Cpu,
      name: "Raspberry Pi 4",
      description: "Powerful edge computing for real-time AI processing and image analysis",
      specs: ["Quad-core ARM Cortex-A72", "4GB RAM", "Wi-Fi & Bluetooth"],
      color: "text-[#2E7D32]"
    },
    {
      icon: Camera,
      name: "Pi Camera Module",
      description: "High-resolution camera captures detailed images of rubber sheet surface",
      specs: ["8MP Resolution", "Auto Focus", "LED Flash Support"],
      color: "text-blue-600"
    },
    {
      icon: Droplets,
      name: "DHT Moisture Sensor",
      description: "IoT-based sensor precisely measures moisture content in rubber sheets",
      specs: ["±2% Humidity Accuracy", "Real-time Reading", "Temperature Compensation"],
      color: "text-cyan-600"
    }
  ];

  const softwareStack = [
    {
      icon: Code,
      name: "Python + OpenCV",
      description: "Image processing and computer vision for quality analysis",
      color: "text-yellow-600"
    },
    {
      icon: Zap,
      name: "TensorFlow / PyTorch",
      description: "Machine learning models for rubber sheet classification",
      color: "text-orange-600"
    },
    {
      icon: Database,
      name: "MySQL Database",
      description: "Stores grading history and user data securely",
      color: "text-purple-600"
    },
    {
      icon: Wifi,
      name: "Flask/Django Backend",
      description: "RESTful API for frontend communication and processing",
      color: "text-green-600"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Image Capture",
      description: "Pi Camera captures detailed photos of the rubber sheet",
      icon: Camera
    },
    {
      step: 2,
      title: "Color Detection",
      description: "OpenCV analyzes color patterns and surface texture",
      icon: Zap
    },
    {
      step: 3,
      title: "Moisture Reading",
      description: "DHT sensor measures exact moisture content percentage",
      icon: Droplets
    },
    {
      step: 4,
      title: "AI Grading",
      description: "ML model assigns RSS grade and calculates price",
      icon: CheckCircle
    }
  ];

  const grades = [
    { name: "RSS1", description: "Premium grade - Light colored, minimal defects, low moisture", price: "₹185-190/kg", color: "bg-[#2E7D32]" },
    { name: "RSS2", description: "Standard grade - Good quality with minor blemishes", price: "₹175-180/kg", color: "bg-blue-500" },
    { name: "RSS3", description: "Commercial grade - Acceptable quality for industrial use", price: "₹165-170/kg", color: "bg-yellow-500" },
    { name: "RSS4", description: "Lower grade - Darker color, more defects allowed", price: "₹155-160/kg", color: "bg-orange-500" },
    { name: "RSS5", description: "Lowest grade - Significant defects, industrial use only", price: "₹145-150/kg", color: "bg-red-500" }
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
          <h1 className="text-5xl text-gray-900 mb-6">Technology Overview</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How the system works - combining image processing, sensor data, and AI for accurate grading
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-20">
          <Card className="shadow-2xl bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl mb-6 text-center">System Overview</h2>
              <p className="text-xl text-center max-w-4xl mx-auto opacity-90 leading-relaxed">
                Our system uses advanced <span className="font-semibold">Raspberry Pi 4</span> with integrated 
                <span className="font-semibold"> Pi Camera</span> and <span className="font-semibold">DHT moisture sensors</span> 
                to capture and analyze rubber sheets. The combination of <span className="font-semibold">image processing (OpenCV)</span>, 
                <span className="font-semibold"> sensor data (IoT)</span>, and <span className="font-semibold">machine learning (TensorFlow/PyTorch)</span> 
                ensures accurate grading and fair pricing based on international RSS standards.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hardware Stack */}
        <div className="mb-20">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Hardware Components</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#2E7D32]">
                  <CardHeader className="text-center">
                    <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${tech.color}`} />
                    </div>
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                    <CardDescription className="text-base">{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tech.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-[#2E7D32] mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Software Stack */}
        <div className="mb-20">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Advanced Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                      <Icon className={`h-7 w-7 ${tech.color}`} />
                    </div>
                    <h3 className="text-base text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-xs text-gray-600">{tech.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Workflow Diagram</h2>
          <p className="text-center text-gray-600 mb-8">Image → Color Detection → Moisture Sensor → Grading → Price Display</p>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="bg-[#2E7D32] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mb-4 mx-auto shadow-lg">
                        {step.step}
                      </div>
                      <Icon className="h-8 w-8 text-[#2E7D32] mx-auto mb-3" />
                      <h3 className="text-lg text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-[#2E7D32]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RSS Grading System Prices */}
        <div className="mb-20">
          <h2 className="text-3xl text-gray-900 mb-4 text-center">RSS Grading System Prices</h2>
          <p className="text-center text-gray-600 mb-8">Dynamically linked with live rubber market prices</p>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {grades.map((grade, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2E7D32]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge className={`${grade.color} text-white px-4 py-2 text-lg shadow-lg`}>
                        {grade.name}
                      </Badge>
                      <div>
                        <h3 className="text-base text-gray-900">{grade.description}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl text-[#2E7D32]">{grade.price}</div>
                      <div className="text-sm text-gray-500">Live Market Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-2xl max-w-3xl mx-auto bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl mb-4">Ready to Try Our System?</h3>
              <p className="text-xl mb-8 opacity-90">
                Upload your rubber sheet image and get instant AI-powered grading
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => onNavigate('upload')}
                  className="bg-white text-[#2E7D32] hover:bg-gray-100"
                >
                  Upload & Grade Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('about')}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2E7D32]"
                >
                  Learn More About Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
