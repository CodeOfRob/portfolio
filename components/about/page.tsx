import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

import { socials } from "@/data/socials";

export default function About() {
  return (
    <div id="about" className="h-screen flex snap-center">
      <div className="m-auto flex flex-col gap-y-6 text-center">
        <Image
          src={"/profilePicture.jpeg"}
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <p className="text-4xl font-semibold tracking-wide">
          Hi, I&apos;m Robin 👋
        </p>
        <div className="text-xl opacity-50">
          <p>junior web developer</p>
          <p>business intelligence student</p>
        </div>
        <div id="links" className="flex justify-center gap-x-6">
          <Link
            href={socials.linkedin.link}
            target="_blank"
            className="opacity-70 hover:opacity-100 transition duration-300"
          >
            <FaLinkedinIn size={30} />
          </Link>
          <Link
            href={socials.github.link}
            target="_blank"
            className="opacity-70 hover:opacity-100 transition duration-300"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href={socials.email.link}
            target="_blank"
            className="opacity-70 hover:opacity-100 transition duration-300"
          >
            <FaRegEnvelope size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
