import { Mail, Phone, Menu, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import logo from '@/assets/shared/logo.png';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'services' | 'content-marketing' | 'google-ads' | 'meta-ads' | 'shopify' | 'social-media') => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (service: 'services' | 'content-marketing' | 'google-ads' | 'meta-ads' | 'shopify' | 'social-media') => {
    if (onNavigate) {
      onNavigate(service);
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          <div 
            className="cursor-pointer"
            onClick={handleHomeClick}
          >
            <img src={logo} alt="Digital Advento" className="h-8 md:h-10 lg:h-12 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#" onClick={handleHomeClick} className="text-[#1E3A5F] hover:text-[#4A90E2] text-sm xl:text-base">Home</a>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="text-[#1E3A5F] hover:text-[#4A90E2] text-sm xl:text-base flex items-center gap-1"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-50 border border-gray-100">
                  <button
                    onClick={() => handleServiceClick('services')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1E3A5F] hover:bg-gray-100 hover:text-[#4A90E2] transition-colors"
                  >
                    Branding & PR
                  </button>
                  <button
                    onClick={() => handleServiceClick('content-marketing')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1E3A5F] hover:bg-gray-100 hover:text-[#4A90E2] transition-colors"
                  >
                    Content Marketing
                  </button>
                  <button
                    onClick={() => handleServiceClick('google-ads')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1E3A5F] hover:bg-gray-100 hover:text-[#4A90E2] transition-colors"
                  >
                    Google Ads
                  </button>
                  <button
                    onClick={() => handleServiceClick('meta-ads')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1E3A5F] hover:bg-gray-100 hover:text-[#4A90E2] transition-colors"
                  >
                    Meta Ads
                  </button>
                  <button
                    onClick={() => handleServiceClick('shopify')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1E3A5F] hover:bg-gray-100 hover:text-[#4A90E2] transition-colors"
                  >
                    Shopify Development
                  </button>
                  <button
                    onClick={() => handleServiceClick('social-media')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1E3A5F] hover:bg-gray-100 hover:text-[#4A90E2] transition-colors"
                  >
                    Social Media Marketing
                  </button>
                </div>
              )}
            </div>
            
            <a href="#" className="text-[#1E3A5F] hover:text-[#4A90E2] text-sm xl:text-base">About</a>
            <a href="#" className="text-[#1E3A5F] hover:text-[#4A90E2] text-sm xl:text-base">Blog</a>
            <a href="#" className="text-[#1E3A5F] hover:text-[#4A90E2] text-sm xl:text-base">Contact</a>
          </nav>
          
          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-2 text-xs lg:text-sm text-[#1E3A5F]">
              <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2 text-xs lg:text-sm text-[#1E3A5F]">
              <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">info@company.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#1E3A5F]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              <a href="#" onClick={handleHomeClick} className="text-[#1E3A5F] hover:text-[#4A90E2] py-2">Home</a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="text-[#1E3A5F] hover:text-[#4A90E2] py-2 flex items-center gap-1 w-full"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    <button
                      onClick={() => handleServiceClick('services')}
                      className="text-left text-[#1E3A5F] hover:text-[#4A90E2] py-1"
                    >
                      Branding & PR
                    </button>
                    <button
                      onClick={() => handleServiceClick('content-marketing')}
                      className="text-left text-[#1E3A5F] hover:text-[#4A90E2] py-1"
                    >
                      Content Marketing
                    </button>
                    <button
                      onClick={() => handleServiceClick('google-ads')}
                      className="text-left text-[#1E3A5F] hover:text-[#4A90E2] py-1"
                    >
                      Google Ads
                    </button>
                    <button
                      onClick={() => handleServiceClick('meta-ads')}
                      className="text-left text-[#1E3A5F] hover:text-[#4A90E2] py-1"
                    >
                      Meta Ads
                    </button>
                    <button
                      onClick={() => handleServiceClick('shopify')}
                      className="text-left text-[#1E3A5F] hover:text-[#4A90E2] py-1"
                    >
                      Shopify Development
                    </button>
                    <button
                      onClick={() => handleServiceClick('social-media')}
                      className="text-left text-[#1E3A5F] hover:text-[#4A90E2] py-1"
                    >
                      Social Media Marketing
                    </button>
                  </div>
                )}
              </div>
              
              <a href="#" className="text-[#1E3A5F] hover:text-[#4A90E2] py-2">About</a>
              <a href="#" className="text-[#1E3A5F] hover:text-[#4A90E2] py-2">Blog</a>
              <a href="#" className="text-[#1E3A5F] hover:text-[#4A90E2] py-2">Contact</a>
              <div className="flex items-center gap-2 text-sm text-[#1E3A5F] py-2">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#1E3A5F] py-2">
                <Mail className="w-4 h-4" />
                <span>info@company.com</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}