import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect, useLocation, useParams, useSearch } from "wouter";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./config/siteConfig";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import NotFound from "./pages/NotFound";

// Code-split lazy pages for ultra-fast initial load
const HomePage = lazy(() => import("./pages/HomePage"));
const ModelsPage = lazy(() => import("./pages/ModelsPage"));
const SectorsPage = lazy(() => import("./pages/SectorsPage"));
const EngineeringPage = lazy(() => import("./pages/EngineeringPage"));
const ConfiguratorPage = lazy(() => import("./pages/ConfiguratorPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const KnowledgePage = lazy(() => import("./pages/KnowledgePage"));
const ArticleDetailPage = lazy(() => import("./pages/ArticleDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const RFQPage = lazy(() => import("./pages/RFQPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

function PageLoader() {
  return (
    <div className="flex-1 min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-amber-500/20 border-t-amber-500 animate-spin" />
        <span className="absolute text-[10px] font-mono font-black text-amber-400">ST</span>
      </div>
      <div className="mt-4 text-[11px] font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span>STRUCTIVA ENGINEERING</span>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function LocalizedRouteWrapper({
  Component,
}: {
  Component: React.ComponentType<{ lang: string; slug?: string }>;
}) {
  const params = useParams<{ lang?: string; slug?: string }>();
  const activeLang = params.lang;

  if (!activeLang || !SUPPORTED_LANGUAGES.some((language) => language.code === activeLang)) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Component lang={activeLang} slug={params.slug} />
    </Suspense>
  );
}

const LEGACY_PATHS = [
  "/", "/models", "/sectors", "/engineering", "/configurator", "/projects",
  "/knowledge", "/knowledge/:slug", "/about", "/contact", "/request-a-quote",
];

function LegacyRedirect() {
  const [location] = useLocation();
  const search = useSearch();
  const path = location.replace(/\/+$/, "");
  const hash = typeof window === "undefined" ? "" : window.location.hash;

  return <Redirect to={`/${DEFAULT_LANGUAGE}${path}${search ? `?${search}` : ""}${hash}`} replace />;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#09131c] text-white selection:bg-amber-500 selection:text-[#0f1d2a]">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Suspense fallback={<PageLoader />}>
          <Switch>
            {/* Super Admin Dashboard Routes */}
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/admin" component={DashboardPage} />

            {/* Resolve legacy URLs before the dynamic language segment. */}
            {LEGACY_PATHS.map((path) => (
              <Route key={path} path={path} component={LegacyRedirect} />
            ))}

            {/* Localized 30-Language Routes (/:lang/...) */}
            <Route path="/:lang/knowledge/:slug">
              <LocalizedRouteWrapper Component={ArticleDetailPage} />
            </Route>
            <Route path="/:lang/knowledge">
              <LocalizedRouteWrapper Component={KnowledgePage} />
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
            <Route path="/:lang/about">
              <LocalizedRouteWrapper Component={AboutPage} />
            </Route>
            <Route path="/:lang/contact">
              <LocalizedRouteWrapper Component={ContactPage} />
            </Route>
            <Route path="/:lang/request-a-quote">
              <LocalizedRouteWrapper Component={RFQPage} />
            </Route>
            <Route path="/:lang">
              <LocalizedRouteWrapper Component={HomePage} />
            </Route>

            {/* Default Catch-all */}
            <Route>
              <NotFound />
            </Route>
          </Switch>
          </Suspense>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
