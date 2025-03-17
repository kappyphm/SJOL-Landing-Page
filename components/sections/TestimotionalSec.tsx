const TestimotionalSec = () => {
  return (
    <>
      {/*Testimonials section*/}
      <section className="w-full bg-[url('/BG2.gif')] bg-fixed bg-cover bg-top text-center py-10 px-4">
        <h2 className="text-xl md:text-3xl font-semibold md:mb-10 mb-4">
          Play on Itch.io
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://itch.io/embed/3402603"
            className="w-full max-w-3xl rounded-lg"
          >
            <a href="https://kappyphm.itch.io/safe-journey-of-loppy">
              Safe Journey of Loppy by kappyphm
            </a>
          </iframe>
        </div>
      </section>
    </>
  );
};

export default TestimotionalSec;
