import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { User, Users, Shield, ArrowLeft } from "lucide-react";

interface LoginSectionProps {
  onNavigate: (page: string) => void;
  onLogin: (userName: string, userType: string) => void;
}

export function LoginSection({ onNavigate, onLogin }: LoginSectionProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const userTypes = [
    {
      id: "farmer",
      name: "Farmer",
      icon: User,
      description: "Upload rubber sheets and get instant grading",
      color: "text-[#2E7D32]",
      bgColor: "bg-green-100"
    },
    {
      id: "merchant",
      name: "Merchant",
      icon: Users,
      description: "Access market prices and bulk grading",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      id: "admin",
      name: "Admin",
      icon: Shield,
      description: "Manage system and user accounts",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedUserType = userTypes.find(t => t.id === activeTab);
    if (selectedUserType && formData.name) {
      onLogin(formData.name, selectedUserType.name);
      onNavigate('dashboard');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="mb-8 text-gray-600 hover:text-[#2E7D32]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-900 mb-4">
            Choose Login Type
          </h1>
          <p className="text-gray-600 text-xl">
            Select your account type to access the platform
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {userTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeTab === type.id
                    ? 'border-[#2E7D32] bg-green-50 shadow-md ring-2 ring-[#2E7D32]'
                    : 'border-gray-200 hover:border-[#2E7D32]'
                }`}
                onClick={() => setActiveTab(type.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full ${type.bgColor} shadow-sm mb-4`}>
                    <Icon className={`h-6 w-6 ${type.color}`} />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{type.name} Login</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Login Form - Only shown after selection */}
        {activeTab && (
          <Card className="max-w-md mx-auto shadow-xl animate-in fade-in duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">
                {isLogin ? 'Sign In' : 'Sign Up'} as {userTypes.find(t => t.id === activeTab)?.name}
              </CardTitle>
              <CardDescription>
                {isLogin ? 'Enter your credentials to access your account' : 'Create a new account to get started'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      required
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
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
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Password</label>
                  <Input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Confirm Password</label>
                    <Input
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      required
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#2E7D32] hover:text-[#1B5E20] text-sm"
                >
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
