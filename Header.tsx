import { Button } from "./ui/button";
import { Leaf, Menu, X, User } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  userName?: string;
  userType?: string;
  onLogout?: () => void;
}

export function Header({ currentPage, onNavigate, userName, userType, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Upload', id: 'upload' },
    { name: 'Technology', id: 'technology' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-[#2E7D32] p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl text-gray-900">RubberSheetGrading</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'text-[#2E7D32] bg-green-50'
                    : 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Login/User Section */}
          <div className="hidden md:flex items-center space-x-4">
            {userName ? (
              <>
                <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg">
                  <User className="h-4 w-4 text-[#2E7D32]" />
                  <div className="text-sm">
                    <div className="text-gray-600">Welcome,</div>
                    <div className="text-[#2E7D32]">{userName}</div>
                  </div>
                </div>
                <Button
                  onClick={() => onNavigate('dashboard')}
                  className="bg-[#2E7D32] hover:bg-[#1B5E20]"
                >
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={onLogout}
                  className="border-[#2E7D32] text-[#2E7D32] hover:bg-green-50"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={() => onNavigate('login')}
                className="bg-[#2E7D32] hover:bg-[#1B5E20]"
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#2E7D32] p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-2">
              {userName && (
                <div className="px-3 py-2 mb-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-600">Welcome, <span className="text-[#2E7D32]">{userName}</span></div>
                  <div className="text-xs text-gray-500">{userType}</div>
                </div>
              )}
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-left transition-colors ${
                    currentPage === item.id
                      ? 'text-[#2E7D32] bg-green-50'
                      : 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-green-100">
                {userName ? (
                  <>
                    <Button
                      onClick={() => {
                        onNavigate('dashboard');
                        setIsMenuOpen(false);
                      }}
                      className="bg-[#2E7D32] hover:bg-[#1B5E20]"
                    >
                      Dashboard
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        onLogout?.();
                        setIsMenuOpen(false);
                      }}
                      className="border-[#2E7D32] text-[#2E7D32] hover:bg-green-50"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => {
                      onNavigate('login');
                      setIsMenuOpen(false);
                    }}
                    className="bg-[#2E7D32] hover:bg-[#1B5E20]"
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
