import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="relative flex flex-col justify-between items-center">
      <header className="mt-20">
        <h1 className="uppercase text-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-semibold text-5xl">
          Welcome to Doggy Daycare
        </h1>
      </header>
      <main className="flex flex-col items-center">
        <button className="bg-[#4c8fab] p-2 uppercase text-white font-semibold shadow-lg rounded-sm mb-10">
          Our dogs
        </button>
        <figure>
          <Image
            src="/doggyposter.png"
            alt="Happy dog with sunglasses"
            width={300}
            height={300}
          />
        </figure>
      </main>
    </MaxWidthWrapper>
  );
}
