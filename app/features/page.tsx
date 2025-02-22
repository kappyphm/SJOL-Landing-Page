import React from "react";

interface CardProps {
  content: string;
  title: string;
  img?: string;
}

const Card = ({ content, title, img }: CardProps) => {
  return (
    <div className=" min-h-[300px] z-0 relative text-black bg-light font-medium   rounded-md  border-black          border-8     shadow-xl        ">
      <div
        className={
          "absolute hover:opacity-0 transition-all z-10 w-full h-full " +
          (img ? "bg-[url('" + img + "')] bg-cover bg-center" : "bg-light")
        }
      >
        <div className="mt-4 font-bold text-xl">{title}</div>
      </div>
      <div className="text-left px-3 py-3 ">{content}</div>
    </div>
  );
};

const features = [
  {
    title: "Feature 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "/BG1.gif",
  },
  {
    title: "Feature 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "/BG1.gif",
  },
  {
    title: "Feature 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicini elit. Quisquam, quae.",
    img: "/BG1.gif",
  },
  {
    title: "Feature 4",
    content:
      "LoLorem ipsum dolor sit amet consectetur adipisiLorem ipsum dolor sit amet consectetur adipisiLorem ipsum dolor sit amet consectetur adipisiLorem ipsum dolor sit amet consectetur adipisirem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "/BG1.gif",
  },
];

const Features = () => {
  return (
    <div
      className="
            h-screen 
            bg-[url('/BG2.gif')]
            bg-cover
            bg-center
            text-center
            overflow-y-scroll
            sm:flex
            sm:flex-col
            sm:justify-stretch

        "
    >
      <div
        className="
        font-black
        text-light
        py-6 px-8
        text-center
        text-3xl
        
        bg-dark
        sticky
        md:static
        top-0
        rounded-br-xl
        z-20
        rounded-bl-xl
        shadow-lg
      "
      >
        FEATURES
      </div>
      <div
        className="mx-5 z-10 my-5
        md:my-16 
        grid
        gap-10
        sm:grid-cols-4
        grid-cols-1
        sm:mx-10
        sm:flex-1
      "
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            content={feature.content}
            img={feature.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
