import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LoginSection } from "./components/LoginSection";
import { UploadSection } from "./components/UploadSection";
import { TechnologySection } from "./components/TechnologySection";
import { Dashboard } from "./components/Dashboard";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [userType, setUserType] = useState<string | undefined>(undefined);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (name: string, type: string) => {
    setUserName(name);
    setUserType(type);
  };

  const handleLogout = () => {
    setUserName(undefined);
    setUserType(undefined);
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HeroSection onNavigate={handleNavigate} />;
      case "login":
        return <LoginSection onNavigate={handleNavigate} onLogin={handleLogin} />;
      case "upload":
        return <UploadSection onNavigate={handleNavigate} />;
      case "technology":
        return <TechnologySection onNavigate={handleNavigate} />;
      case "dashboard":
        return <Dashboard onNavigate={handleNavigate} userName={userName} userType={userType} />;
      case "about":
        return <AboutSection onNavigate={handleNavigate} />;
      case "contact":
        return <ContactSection onNavigate={handleNavigate} />;
      default:
        return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        userName={userName}
        userType={userType}
        onLogout={handleLogout}
      />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
