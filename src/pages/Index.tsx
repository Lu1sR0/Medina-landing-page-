import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components below the fold for better performance
const AboutUs = lazy(() => import("@/components/AboutUs"));
const Courses = lazy(() => import("@/components/Courses"));
const Doctors = lazy(() => import("@/components/Doctors"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Courses />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Doctors />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
