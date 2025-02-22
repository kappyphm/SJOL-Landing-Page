import Image from "next/image";

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
        text-center
      "
    >
      <div>
        <Image
          src="/GR-Text.png"
          alt="Greeting"
          width={800}
          height={400}
          layout="responsive"
        />
        <div className="px-10 text-sm font-medium text-light">
          Tham gia giao thông an toàn
        </div>
      </div>
      <div className="mt-10">
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
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            className=" opacity-0 hover:opacity-100 transition-all bg-black size-6 absolute left-0 top-0 px-3 py-3 w-full h-full"
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
    </div>
  );
}
