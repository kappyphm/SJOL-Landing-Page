"use client";
import React, { useState } from "react";

interface Testimonials {
  name: string;
  review: string;
}

const TestimotionalSec = () => {
  const [newReview, setNewReview] = useState("");
  const [newName, setNewName] = useState("");
  const [userTestimonials, setUserTestimonials] = useState<Testimonials[]>([]);
  const handleAddReview = () => {
    if (newReview.trim() && newName.trim()) {
      setUserTestimonials([
        ...userTestimonials,
        { name: newName, review: newReview },
      ]);
      setNewReview("");
      setNewName("");
    }
  };
  return (
    <>
      {/*Testimonials section*/}
      <section className="w-full bg-[url('/BG2.gif')] bg-fixed bg-cover bg-top text-center py-10 px-4">
        <h2 className="text-xl md:text-3xl font-semibold md:mb-10 mb-4">
          What Players Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-20">
          <div className=" mt-6 flex flex-col items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 bg-gray-700 rounded mb-2 text-white min-w-64"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <textarea
              placeholder="Write your review..."
              className="p-2 bg-gray-700 rounded mb-2 text-white min-w-64 h-24"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <button
              onClick={handleAddReview}
              className="bg-green-500 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-green-600"
            >
              Send Review
            </button>
          </div>
          <div className="border md:hidden border-light my-4"></div>
          <div className="grid grid-cols-1 gap-6 max-h-[400px] overflow-y-scroll">
            {userTestimonials.length == 0 ? (
              <div>Your review will be here!</div>
            ) : (
              userTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="items-center p-4 bg-gray-700 rounded-lg"
                >
                  <div className="text-left">
                    <h3 className="text-lg font-medium ml-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-300 italic">
                      {" "}
                      &quot;{testimonial.review}&quot;{" "}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimotionalSec;
