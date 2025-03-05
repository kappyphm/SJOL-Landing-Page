import React from "react";
import Image from "next/image";

const GallerySec = () => {
  return (
    <>
      {/* Gallery Section */}
      <section className="w-full text-center py-16 px-4 bg-fixed bg-[url('/BG3.gif')] bg-cover bg-center">
        <h2 className="text-3xl font-semibold mb-8">Game Previews</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto ">
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
    </>
  );
};

export default GallerySec;
