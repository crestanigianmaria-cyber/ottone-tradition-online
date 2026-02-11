import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import StorySection from "@/components/StorySection";
import AwardsSection from "@/components/AwardsSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ReservationSection from "@/components/ReservationSection";
import ContactSection from "@/components/ContactSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/ui/motion-wrapper";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MotionWrapper delay={0.1}>
          <HighlightsSection />
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <StorySection />
        </MotionWrapper>
        <MotionWrapper delay={0.3}>
          <AwardsSection />
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <MenuSection />
        </MotionWrapper>
        <MotionWrapper delay={0.3}>
          <GallerySection />
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <ReviewsSection />
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <ReservationSection />
        </MotionWrapper>
        <MotionWrapper delay={0.3}>
          <EventsSection />
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <ContactSection />
        </MotionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
