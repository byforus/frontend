import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 lg:p-24">
      <div className="flex max-w-full items-center justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Image
          src="/logo.svg"
          alt="ByForUs Logo"
          className="dark:invert flex justify-center "
          width={90}
          height={21}
          priority
        />
      </div>
      <h1 className="text-xl font-medium sm:text-2xl lg:text-4xl text-center sm:mt-12">
        Join Our Passionate Community of Changemakers and Create Daily Impact
        with Just <span className="font-semibold">₹1</span>!
      </h1>
      <div className="relative flex items-center mt-8 sm:mt-16">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/hero.svg"
          alt="Dream World"
          width={540}
          height={54}
          priority
        />
      </div>
      <p className="text-center text-lg sm:text-xl sm:mt-16">
        Contact us at{" "}
        <a href="mailto:support@byforus.org" className="hover:underline">
          support@byforus.org
        </a>{" "}
        to learn more and get involved.
      </p>
      <footer className="sm:mt-16">
        <p className="text-center">© 2023 ByForUs. All rights reserved.</p>
      </footer>
    </main>
  );
}
