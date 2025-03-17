import Link from "next/link";
import Image from "next/image";
import React from "react";

const HeroSec = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-[url('/BG1.gif')] bg-cover bg-center bg-fixed  w-full min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="">
          <Image
            src="/GR-Text.png"
            alt="Greeting"
            width={800}
            height={400}
            max-width={800}
            className="mx-auto"
          />
        </div>
        <p className=" md:text-lg text-light font-medium mb-6">
          Let&apos;s start your journey!
        </p>
        <Link
          href="https://kappyphm.itch.io/safe-journey-of-loppy"
          className="bg-black px-7 uppercase text-light py-5 rounded-lg text-lg font-semibold hover:scale-110 active:scale-105 transition-all hover:bg-dark"
        >
          Play Now
        </Link>
      </header>
    </>
  );
};

export default HeroSec;
