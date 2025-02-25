import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  { name: "KhanhPG", role: "Web Developer", avatar: "/memberAvt/KhanhPG.jpg" },
  { name: "DonNT", role: "Game Developer", avatar: "/memberAvt/DonNT.jpeg" },
  { name: "LongNS", role: "Game Developer", avatar: "/memberAvt/LongNS.jpg" },
  { name: "SonH", role: "Designer", avatar: "/BG1.gif" },
  { name: "LyNT", role: "Designer", avatar: "/memberAvt/LyNT.jpg" },
  { name: "LamTD", role: "Content Creator", avatar: "/memberAvt/LamTD.jpg" },
  { name: "PhongBT", role: "Content Creator", avatar: "/BG1.gif" },
];

const testimonials = [
  {
    name: "John Doe",
    review: "Amazing game! I had so much fun playing it.",
    avatar: "/BG1.gif",
  },
  {
    name: "Jane Smith",
    review: "A fantastic experience, highly recommend!",
    avatar: "/BG1.gif",
  },
  {
    name: "Alex Johnson",
    review: "Great graphics and gameplay. Looking forward to updates!",
    avatar: "/BG1.gif",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
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
          Download now and start your journey!
        </p>
        <Link
          href="/download"
          className="bg-black px-7 uppercase text-light py-5 rounded-lg text-lg font-semibold hover:scale-110 active:scale-105 transition-all hover:bg-dark"
        >
          Download Now
        </Link>
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
            <h3 className="text-xl font-medium">Play to learn</h3>
            <p className="text-gray-400">Learning is fun!</p>
          </div>
        </div>
      </section>

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

      <section className="w-full bg-[url('/BG2.gif')] bg-fixed bg-cover bg-top text-center py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          What Players Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-700 rounded-lg"
            >
              <div className="w-16 h-16 overflow-hidden rounded-full mb-2 flex items-center justify-center bg-gray-700">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-300 italic">
                {" "}
                &quot;{testimonial.review}&quot;{" "}
              </p>
              <h3 className="text-lg font-medium mt-2">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 bg-gray-800 text-gray-400 px-4">
        <p>&copy; 2025 The7Bugs Team..</p>
      </footer>
    </div>
  );
}
