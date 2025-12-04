import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactSectionProps {
  onNavigate: (page: string) => void;
}

export function ContactSection({ onNavigate }: ContactSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "madansettajana@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9008453654",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sullia, Karnataka, India",
      description: "Visit our development center"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the grading system?",
      answer: "Our AI-powered system achieves 98.5% accuracy in grade classification, validated through extensive testing with rubber industry experts and real-world data."
    },
    {
      question: "What types of rubber sheets can be graded?",
      answer: "We support grading for RSS1 through RSS5 grades, covering all standard natural rubber sheet types used in the industry according to international standards."
    },
    {
      question: "How does the moisture sensor work?",
      answer: "We use IoT-based DHT sensors integrated with Raspberry Pi to measure moisture content accurately. The sensor data is combined with image analysis for comprehensive grading."
    },
    {
      question: "Can I use this system offline?",
      answer: "The Raspberry Pi system can process grading offline, but real-time market pricing requires internet connectivity for the most accurate and up-to-date information."
    },
    {
      question: "How do I get started as a farmer?",
      answer: "Simply create a farmer account, upload clear images of your rubber sheets, and get instant grading results with current market prices based on quality."
    },
    {
      question: "Is there any training required?",
      answer: "No special training needed! Our system is designed to be user-friendly. Just take clear photos of your rubber sheets and upload them for instant grading."
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
          <h1 className="text-5xl text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our rubber grading system? We're here to help!
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-transparent hover:border-[#2E7D32]">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-[#2E7D32]" />
                  </div>
                  <h3 className="text-sm text-gray-500 mb-1">{info.label}</h3>
                  <p className="text-lg text-gray-900 mb-1">{info.value}</p>
                  <p className="text-xs text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Mail className="mr-2 h-6 w-6 text-[#2E7D32]" />
                Send us a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto h-16 w-16 text-[#2E7D32] mb-4" />
                  <h3 className="text-2xl text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message"
                        className="border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] py-3 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-base">
                Quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h3 className="text-base text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Still have questions? We're here to help!
                </p>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('about')}
                  className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-green-50"
                >
                  Learn More About Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="shadow-2xl bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl mb-4">Ready to Start Grading?</h2>
              <p className="text-xl mb-6 opacity-90">
                Experience accurate rubber sheet grading today
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('upload')}
                className="bg-white text-[#2E7D32] hover:bg-gray-100"
              >
                Upload Your First Sheet
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
