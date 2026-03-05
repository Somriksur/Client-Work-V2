import { useState, useEffect, lazy, Suspense, memo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import { AdminProvider, useAdmin } from '../contexts/AdminContext';
import { AdminToolbar } from '../components/AdminToolbar';
import { AdminLogin } from '../components/AdminLogin';
import { Loader } from '../components/Loader';
import { FastAdmin } from '../components/admin/FastAdmin';
import { ImprovedAdminDashboard as AdminDashboard } from '../components/admin/ImprovedAdminDashboard';
import { PageRenderer } from '../components/PageRenderer';
import { Toaster } from 'sonner';

// Lazy load service pages for better performance
const ContentMarketingPage = lazy(() => import('./services/content-marketing/ContentMarketingPage').then(m => ({ default: m.ContentMarketingPage })));
const GoogleAdsPage = lazy(() => import('./services/google-ads/GoogleAdsPage').then(m => ({ default: m.GoogleAdsPage })));
const MetaAdsPage = lazy(() => import('./services/meta-ads/MetaAdsPage').then(m => ({ default: m.MetaAdsPage })));
const ShopifyPage = lazy(() => import('./services/shopify/ShopifyPage').then(m => ({ default: m.ShopifyPage })));
const SocialMediaPage = lazy(() => import('./services/social-media/SocialMediaPage').then(m => ({ default: m.SocialMediaPage })));
const BuildABrandPage = lazy(() => import('./services/build-a-brand/BuildABrandPage').then(m => ({ default: m.BuildABrandPage })));
const ServicesPage = lazy(() => import('./services/ServicesPage').then(m => ({ default: m.ServicesPage })));

// Page loading spinner for lazy loaded components
const PageLoader = memo(() => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#4A90E2] border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-gray-500">Loading...</p>
    </div>
  </div>
));

// Page wrapper component for consistent layout
const PageWrapper = memo(({ children }: { children: React.ReactNode }) => {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();
  
  const handleNavigate = (page: string) => {
    const routes: Record<string, string> = {
      'home': '/',
      'services': '/services',
      'content-marketing': '/content-marketing',
      'google-ads': '/google-ads',
      'meta-ads': '/meta-ads',
      'shopify': '/shopify-development',
      'social-media': '/social-media-marketing',
      'build-a-brand': '/branding-pr',
    };
    navigate(routes[page] || '/');
  };

  return (
    <>
      <AdminToolbar />
      <div className="min-h-screen bg-white m-0 p-0 overflow-x-hidden" style={isAdmin ? { paddingTop: '48px' } : {}}>
        <Header onNavigate={handleNavigate} />
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
      </div>
    </>
  );
});

// Home page component - memoized to prevent re-renders
const HomePage = memo(() => {
  const navigate = useNavigate();
  
  const handleNavigate = (page: string) => {
    const routes: Record<string, string> = {
      'home': '/',
      'services': '/services',
      'content-marketing': '/content-marketing',
      'google-ads': '/google-ads',
      'meta-ads': '/meta-ads',
      'shopify': '/shopify-development',
      'social-media': '/social-media-marketing',
      'build-a-brand': '/branding-pr',
    };
    navigate(routes[page] || '/');
  };

  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection onNavigate={handleNavigate} />
      <BusinessGrowthSection />
      <PerformanceSection />
      <ClientsSection />
      <WhyChooseSection />
      <PartnersSection />
      <ReadyToGrowSection />
      <CertificationsSection />
      <FAQSection />
      <Footer />
    </>
  );
});

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle admin login via hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#admin-login' || hash === '#/admin-login') {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Admin routes - no page wrapper
  if (location.pathname === '/fast-admin') {
    return <FastAdmin />;
  }
  
  if (location.pathname === '/fast-admin/dashboard') {
    return <AdminDashboard />;
  }

  if (location.pathname === '/admin-login') {
    return <AdminLogin />;
  }

  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/content-marketing" element={<ContentMarketingPage />} />
        <Route path="/google-ads" element={<GoogleAdsPage />} />
        <Route path="/meta-ads" element={<MetaAdsPage />} />
        <Route path="/shopify-development" element={<ShopifyPage />} />
        <Route path="/social-media-marketing" element={<SocialMediaPage />} />
        <Route path="/branding-pr" element={<BuildABrandPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </PageWrapper>
  );
}

function AppContent() {
  // Remove loader - causes unnecessary reloads and delays
  // Images will load progressively with caching

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/fast-admin" element={<FastAdmin />} />
          <Route path="/fast-admin/dashboard" element={<AdminDashboard />} />
          <Route path="/test-builder" element={<PageRenderer pageId="home" />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
      <Toaster 
        position="top-center" 
        richColors 
        closeButton 
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  );
}
