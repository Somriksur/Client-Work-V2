import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BusinessGrowthSection } from './components/BusinessGrowthSection';
import { PerformanceSection } from './components/PerformanceSection';
import { ClientsSection } from './components/ClientsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { PartnersSection } from './components/PartnersSection';
import { ReadyToGrowSection } from './components/ReadyToGrowSection';
import { CertificationsSection } from './components/CertificationsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ServicesPage } from './services/ServicesPage';
import { ContentMarketingPage } from './services/content-marketing/ContentMarketingPage';
import { GoogleAdsPage } from './services/google-ads/GoogleAdsPage';
import { MetaAdsPage } from './services/meta-ads/MetaAdsPage';
import { ShopifyPage } from './services/shopify/ShopifyPage';
import { SocialMediaPage } from './services/social-media/SocialMediaPage';
import { AdminProvider, useAdmin } from '../contexts/AdminContext';
import { AdminToolbar } from '../components/AdminToolbar';
import { AdminLogin } from '../components/AdminLogin';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'content-marketing' | 'google-ads' | 'meta-ads' | 'shopify' | 'social-media' | 'admin-login'>('home');
  const { isAdmin } = useAdmin();

  // Check URL hash for admin login
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#admin-login' || hash === '#/admin-login') {
        setCurrentPage('admin-login');
      }
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (currentPage === 'admin-login') {
    return <AdminLogin />;
  }

  if (currentPage === 'services') {
    return (
      <>
        <AdminToolbar />
        <div className="min-h-screen bg-white m-0 p-0" style={isAdmin ? { paddingTop: '48px' } : {}}>
          <Header onNavigate={setCurrentPage} />
          <ServicesPage />
        </div>
      </>
    );
  }

  if (currentPage === 'content-marketing') {
    return (
      <>
        <AdminToolbar />
        <div className="min-h-screen bg-white m-0 p-0" style={isAdmin ? { paddingTop: '48px' } : {}}>
          <Header onNavigate={setCurrentPage} />
          <ContentMarketingPage />
        </div>
      </>
    );
  }

  if (currentPage === 'google-ads') {
    return (
      <>
        <AdminToolbar />
        <div className="min-h-screen bg-white m-0 p-0" style={isAdmin ? { paddingTop: '48px' } : {}}>
          <Header onNavigate={setCurrentPage} />
          <GoogleAdsPage />
        </div>
      </>
    );
  }

  if (currentPage === 'meta-ads') {
    return (
      <>
        <AdminToolbar />
        <div className="min-h-screen bg-white m-0 p-0" style={isAdmin ? { paddingTop: '48px' } : {}}>
          <Header onNavigate={setCurrentPage} />
          <MetaAdsPage />
        </div>
      </>
    );
  }

  if (currentPage === 'shopify') {
    return (
      <>
        <AdminToolbar />
        <div className="min-h-screen bg-white m-0 p-0" style={isAdmin ? { paddingTop: '48px' } : {}}>
          <Header onNavigate={setCurrentPage} />
          <ShopifyPage />
        </div>
      </>
    );
  }

  if (currentPage === 'social-media') {
    return (
      <>
        <AdminToolbar />
        <div className="min-h-screen bg-white m-0 p-0" style={isAdmin ? { paddingTop: '48px' } : {}}>
          <Header onNavigate={setCurrentPage} />
          <SocialMediaPage />
        </div>
      </>
    );
  }

  return (
    <>
      <AdminToolbar />
      <div className="min-h-screen bg-white m-0 p-0" style={isAdmin ? { paddingTop: '48px' } : {}}>
        <Header onNavigate={setCurrentPage} />
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection onNavigate={setCurrentPage} />
        <BusinessGrowthSection />
        <PerformanceSection />
        <ClientsSection />
        <WhyChooseSection />
        <PartnersSection />
        <ReadyToGrowSection />
        <CertificationsSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <AppWrapper />
    </AdminProvider>
  );
}

function AppWrapper() {
  // Allow both admin and public users to view the site
  // Admin gets the toolbar and edit capabilities
  return <AppContent />;
}