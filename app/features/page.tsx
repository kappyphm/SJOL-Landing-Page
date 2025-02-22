import React from "react";

const Card = () => {
  return (
    <div className="bg-light relative text-black font-medium rounded-md border-black border-dashed border-4 shadow-xl">
      <div className="">Features</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        aliquam sequi ut. Quaerat ullam optio expedita, obcaecati asperiores
        maxime architecto natus facere possimus, quis repellat ipsam error
        accusamus aspernatur aut?
      </div>
    </div>
  );
};

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
        "
    >
      <div
        className="
        font-black
        text-light
        py-6 px-8
        text-center
        text-3xl
        mx-auto
        bg-dark
        sticky
        top-0
        rounded-br-xl
        rounded-bl-xl
        shadow-lg
      "
      >
        FEATURES
      </div>
      <div className="">
        <Card />
      </div>
    </div>
  );
};

export default Features;
