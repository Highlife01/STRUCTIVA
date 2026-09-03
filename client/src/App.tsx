import React, { useEffect } from "react";
import { Switch, Route, useLocation, useParams } from "wouter";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./config/siteConfig";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ModelsPage from "./pages/ModelsPage";
import SectorsPage from "./pages/SectorsPage";
import EngineeringPage from "./pages/EngineeringPage";
import ConfiguratorPage from "./pages/ConfiguratorPage";
import ProjectsPage from "./pages/ProjectsPage";
import KnowledgePage from "./pages/KnowledgePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RFQPage from "./pages/RFQPage";
import DashboardPage from "./pages/DashboardPage";
import WhatsAppButton from "./components/WhatsAppButton";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

// Subcomponent that syncs URL language parameter with LanguageContext
function LocalizedRouteWrapper({ 
  Component, 
  defaultLang = "tr" 
}: { 
  Component: React.ComponentType<{ lang: string; slug?: string }>; 
  defaultLang?: string 
}) {
  const params = useParams<{ lang?: string; slug?: string }>();
  const { language, setLanguage } = useLanguage();
  const activeLang = params.lang || language || defaultLang;

  useEffect(() => {
    if (params.lang && params.lang !== language) {
      const isSupported = SUPPORTED_LANGUAGES.some((l) => l.code === params.lang);
      if (isSupported) {
        setLanguage(params.lang);
      }
    }
  }, [params.lang, language, setLanguage]);

  return <Component lang={activeLang} slug={params.slug} />;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#09131c] text-white selection:bg-amber-500 selection:text-[#0f1d2a]">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Switch>
            {/* Super Admin Dashboard Routes */}
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/admin" component={DashboardPage} />

            {/* Localized 30-Language Routes (/:lang/...) */}
            <Route path="/:lang">
              <LocalizedRouteWrapper Component={HomePage} />
            </Route>
            <Route path="/:lang/models">
              <LocalizedRouteWrapper Component={ModelsPage} />
            </Route>
            <Route path="/:lang/sectors">
              <LocalizedRouteWrapper Component={SectorsPage} />
            </Route>
            <Route path="/:lang/engineering">
              <LocalizedRouteWrapper Component={EngineeringPage} />
            </Route>
            <Route path="/:lang/configurator">
              <LocalizedRouteWrapper Component={ConfiguratorPage} />
            </Route>
            <Route path="/:lang/projects">
              <LocalizedRouteWrapper Component={ProjectsPage} />
            </Route>
            <Route path="/:lang/knowledge">
              <LocalizedRouteWrapper Component={KnowledgePage} />
            </Route>
            <Route path="/:lang/knowledge/:slug">
              <LocalizedRouteWrapper Component={ArticleDetailPage} />
            </Route>
            <Route path="/:lang/about">
              <LocalizedRouteWrapper Component={AboutPage} />
            </Route>
            <Route path="/:lang/contact">
              <LocalizedRouteWrapper Component={ContactPage} />
            </Route>
            <Route path="/:lang/request-a-quote">
              <LocalizedRouteWrapper Component={RFQPage} />
            </Route>

            {/* Unprefixed legacy/root fallback routes for seamless UX */}
            <Route path="/">
              <LocalizedRouteWrapper Component={HomePage} />
            </Route>
            <Route path="/models">
              <LocalizedRouteWrapper Component={ModelsPage} />
            </Route>
            <Route path="/sectors">
              <LocalizedRouteWrapper Component={SectorsPage} />
            </Route>
            <Route path="/engineering">
              <LocalizedRouteWrapper Component={EngineeringPage} />
            </Route>
            <Route path="/configurator">
              <LocalizedRouteWrapper Component={ConfiguratorPage} />
            </Route>
            <Route path="/projects">
              <LocalizedRouteWrapper Component={ProjectsPage} />
            </Route>
            <Route path="/knowledge">
              <LocalizedRouteWrapper Component={KnowledgePage} />
            </Route>
            <Route path="/knowledge/:slug">
              <LocalizedRouteWrapper Component={ArticleDetailPage} />
            </Route>
            <Route path="/about">
              <LocalizedRouteWrapper Component={AboutPage} />
            </Route>
            <Route path="/contact">
              <LocalizedRouteWrapper Component={ContactPage} />
            </Route>
            <Route path="/request-a-quote">
              <LocalizedRouteWrapper Component={RFQPage} />
            </Route>

            {/* Default Catch-all */}
            <Route>
              <LocalizedRouteWrapper Component={HomePage} />
            </Route>
          </Switch>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
