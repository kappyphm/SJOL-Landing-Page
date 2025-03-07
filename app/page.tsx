import AboutUsSec from "@/components/sections/AboutUsSec";
import FeaturesSec from "@/components/sections/FeaturesSec";
import GallerySec from "@/components/sections/GallerySec";
import HeroSec from "@/components/sections/HeroSec";
import TestimotionalSec from "@/components/sections/TestimotionalSec";

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center ">
      <HeroSec />
      <FeaturesSec />
      <GallerySec />
      <AboutUsSec />
      <TestimotionalSec />
    </div>
  );
}
