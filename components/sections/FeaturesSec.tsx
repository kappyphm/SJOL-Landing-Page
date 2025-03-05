import React from "react";

const FeaturesSec = () => {
  return (
    <>
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
            <h3 className="text-xl font-medium">Play to learn</h3>
            <p className="text-gray-400">Learning is fun!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSec;
