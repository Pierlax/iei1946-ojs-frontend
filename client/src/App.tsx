import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Review = lazy(() => import("./pages/Review"));
const Institute = lazy(() => import("./pages/Institute"));
const About = lazy(() => import("./pages/About"));
const SubmissionGuidelines = lazy(() => import("./pages/SubmissionGuidelines"));
const OACopyright = lazy(() => import("./pages/OACopyright"));
const PublicationEthics = lazy(() => import("./pages/PublicationEthics"));
const Contacts = lazy(() => import("./pages/Contacts"));
const EditorialBoard = lazy(() => import("./pages/EditorialBoard"));
const Blog = lazy(() => import("./pages/Blog"));

// Design System: Institutional Elegance
// - Primary: Dark Navy (#1a3c5e)
// - Accent: Teal (#00b4a0)
// - Typography: Playfair Display (serif headers), Source Sans 3 (body)
// - Layout: Academic journal with sidebar navigation

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 border-2 border-[#00b4a0] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/article/:id" component={ArticleDetail} />
        <Route path="/review" component={Review} />
        <Route path="/institute" component={Institute} />
        <Route path="/about" component={About} />
        <Route path="/submission-guidelines" component={SubmissionGuidelines} />
        <Route path="/oa-copyright" component={OACopyright} />
        <Route path="/publication-ethics" component={PublicationEthics} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/editorial-board" component={EditorialBoard} />
        <Route path="/blog" component={Blog} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
