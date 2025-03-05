"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function DownloadDonatePage() {
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
    <div className="bg-gray-900 text-white min-h-screen md:max-h-screen flex flex-col justify-between items-center ">
      {/* Header */}
      <header className="w-full text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get the Game & Support Us
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4">
          Download now and consider donating to support future development!
        </p>
      </header>

      {/* Download Section */}
      <section className="w-full max-w-4xl text-center bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Download Now</h2>
        <button className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Download Game
        </button>
        <p className="mt-4 text-gray-300">
          Total Downloads:{" "}
          <span className="font-bold text-white">{downloadCount}</span>
        </p>
      </section>

      {/* Donation Section */}
      <section className="w-full max-w-4xl text-center bg-gray-800 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Support Our Work</h2>
        <p className="text-gray-300 mb-4">
          Your donations help us continue improving the game and creating new
          content!
        </p>
        <button className="bg-yellow-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
          Donate Now
        </button>
      </section>
      <div className="mt-4">
        <Link
          href="/"
          className="text-sm font-semibold underline hover:text-blue-500 transition-all"
        >
          Back to Home
        </Link>
      </div>

      {/* Footer */}
    </div>
  );
}
