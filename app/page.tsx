"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const teamMembers = [
  { name: "Alice", role: "Web Developer", avatar: "/BG1.gif" },
  { name: "Bob", role: "Game Developer", avatar: "/BG1.gif" },
  { name: "Charlie", role: "Game Developer", avatar: "/BG1.gif" },
  { name: "David", role: "Designer", avatar: "/BG1.gif" },
  { name: "Eve", role: "Designer", avatar: "/BG1.gif" },
  { name: "Frank", role: "Content Creator", avatar: "/BG1.gif" },
  { name: "Grace", role: "Content Creator", avatar: "/BG1.gif" },
];

export default function LandingPage() {
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    // Giả lập số lượt tải từ server
    const fetchDownloadCount = async () => {
      // Thay thế bằng API thực tế nếu có
      const fakeCount = 1234;
      setDownloadCount(fakeCount);
    };

    fetchDownloadCount();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <header className="bg-[url('/BG1.gif')] bg-cover bg-center  w-full min-h-screen flex flex-col justify-center items-center text-center px-4">
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
          Download now and start your journey!
        </p>
        <button
          onClick={() => setDownloadCount(downloadCount + 1)}
          className="bg-black px-7 uppercase text-light py-5 rounded-lg text-lg font-semibold hover:scale-110 active:scale-105 transition-all hover:bg-dark"
        >
          Download Now
        </button>
        <p className="mt-4 text-light font-semibold">
          Downloads:{" "}
          <span className="font-bold text-light">{downloadCount}</span>
        </p>
      </header>

      {/* Features Section */}
      <section className="w-full max-w-4xl text-center py-16 px-4 ">
        <h2 className="text-3xl font-semibold mb-8">Why Play Our Game?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Immersive Graphics</h3>
            <p className="text-gray-400">
              Experience stunning visuals like never before.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Exciting Gameplay</h3>
            <p className="text-gray-400">
              Engage in thrilling and dynamic challenges.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Multiplayer Mode</h3>
            <p className="text-gray-400">Compete with friends in real time.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full  text-center py-16 px-4  bg-[url('/BG3.gif')] bg-cover bg-center">
        <h2 className="text-3xl font-semibold mb-8">Game Previews</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="col-span-2 row-span-2">
            <Image
              src="/BG1.gif"
              alt="Gallery Image 1"
              width={600}
              height={400}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src="/BG2.gif"
              alt="Gallery Image 2"
              width={300}
              height={200}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src="/BG3.gif"
              alt="Gallery Image 3"
              width={300}
              height={200}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2">
            <Image
              src="/BG1.gif"
              alt="Gallery Image 4"
              width={600}
              height={200}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About the Team Section */}
      <section className="w-full max-w-5xl text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-300 mb-10">
          We are a passionate team of developers, designers, and storytellers
          dedicated to creating an amazing gaming experience.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 overflow-hidden rounded-full mb-2 flex items-center justify-center bg-gray-700">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="w-full bg-[url('/BG2.gif')] bg-cover bg-center text-center py-16 px-4">
        <h2 className="text-3xl font-black md:text-5xl mb-6 text-light uppercase">
          Get the Game Now
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-dark text-light hover:bg-shade hover:text-black  px-6 py-3 rounded-lg text-lg font-semibold transition-all">
            Download for Windows
          </button>
          <button className="bg-shade text-black hover:bg-dark hover:text-light px-6 py-3 rounded-lg text-lg font-semibold transition-all">
            Download for Mac
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 bg-gray-800 text-gray-400 px-4">
        <p>&copy; 2025 The7Bugs Team. All rights reserved.</p>
      </footer>
    </div>
  );
}
