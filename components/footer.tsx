import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer id="contact" className="w-full pb-10">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <Link
          href={`mailto:${links.ownerEmail}`}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4"
        >
          <MagicButton
            title="Return to Home"
            icon={<FaLocationArrow />}
            position="right"
            asChild
          />
        </Link>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href="PinPoint"
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
          >
            PinPoint
          </Link>{" "}
          | <span className="underline">GDSC HACKS</span>
        </p>

        <div className="flex items-center gap-6 md:gap-3 mt-4 md:mt-0">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
