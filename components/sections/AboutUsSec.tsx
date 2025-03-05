import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "KhanhPG", role: "Web Developer", avatar: "/memberAvt/KhanhPG.jpg" },
  { name: "DonNT", role: "Game Developer", avatar: "/memberAvt/DonNT.jpeg" },
  { name: "LongNS", role: "Game Developer", avatar: "/memberAvt/LongNS.jpg" },
  { name: "SonH", role: "Designer", avatar: "/BG1.gif" },
  { name: "LyNT", role: "Designer", avatar: "/memberAvt/LyNT.jpg" },
  { name: "LamTD", role: "Content Creator", avatar: "/memberAvt/LamTD.jpg" },
  {
    name: "PhongBT",
    role: "Content Creator",
    avatar: "/memberAvt/PhongBT.jpg",
  },
];

const AboutUsSec = () => {
  return (
    <>
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
    </>
  );
};

export default AboutUsSec;
