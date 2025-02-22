import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
        h-screen bg-[url('/BG1.gif')] 
        bg-cover 
        bg-center
        flex
        flex-col
        justify-center
        gap-10
        text-center
      "
    >
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
      <div className="">
        <button
          className=" 
            font-black 
            text-light 
            px-5 py-4 
            bg-black 
            shadow-[4px_4px_0px_0px_#fff]
            hover:shadow-[8px_8px_0px_0px_#fff]
            hover:scale-105
            active:shadow-[4px_4px_0px_0px_#fff]
            active:scale-100
            transition
            relative

            md:text-4xl
            md:px-8
            md:py-7
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            className="font-slab opacity-0 hover:opacity-100 transition-all bg-black size-6 absolute left-0 top-0 px-4 py-4 w-full h-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          DOWNLOAD NOW
        </button>
      </div>
      <Link
        href="/features"
        className=" hover:text-xl transition-all text-light font-bold underline"
      >
        Learn more about Features
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6 mx-auto "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </Link>
      <div className=""></div>
    </div>
  );
}
