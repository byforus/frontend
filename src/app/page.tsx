import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 lg:p-24">
      <section className="flex max-w-full items-center justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Image
          src="/logo.svg"
          alt="ByForUs Logo"
          className="flex justify-center"
          width={90}
          height={21}
          priority
        />
      </section>
      <h1 className="text-xl font-medium sm:text-2xl lg:text-4xl text-center sm:mt-12">
        Join Our Passionate Community of Changemakers and Create Daily Impact
        with Just <span className="font-semibold">₹1</span>!
      </h1>
      <section className="relative flex items-center mt-8 sm:mt-16">
        <Image
          className="relative"
          src="/hero.svg"
          alt="Dream World"
          width={540}
          height={54}
          priority
        />
      </section>
      <p className="text-center text-lg sm:text-xl sm:mt-16">
        Contact us at{" "}
        <a href="mailto:support@byforus.org" className="hover:underline">
          support@byforus.org
        </a>{" "}
        to learn more and get involved.
      </p>
      <section className="flex my-4 sm:mt-12">
        <a
          href="https://www.linkedin.com/company/byforus"
          target="_blank"
          className="mr-9"
        >
          <FaLinkedin size={36} />
        </a>
        <a href="https://github.com/byforus" target="_blank">
          <FaGithub size={36} />
        </a>
      </section>
      <footer className="sm:mt-16">
        <p className="text-center">© 2023 ByForUs. All rights reserved.</p>
      </footer>
    </main>
  );
}
