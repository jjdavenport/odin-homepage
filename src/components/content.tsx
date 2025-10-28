import { ExternalLink, Twitter, Phone, Mail } from "lucide-react";
import { useState, type ReactNode } from "react";
import footerImage from "../assets/461651565_2309674672719173_6514120453975065192__n.jpg";
import headerImage from "../assets/pexels-shvetsa-5711949.jpg";
import headerImageTablet from "../assets/pexels-artempodrez-4492216.jpg";
import github from "../assets/github-142-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import { useMediaQuery } from "react-responsive";

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="relative">
    <svg
      aria-hidden="true"
      className="absolute top-0 left-0 w-full"
      viewBox="0 0 100 96"
      preserveAspectRatio="none"
      style={{
        height: "30rem",
        width: "100%",
        zIndex: 0,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <polygon points="0,0 100,0 100,50 0,96" fill="var(--color-blue)" />
    </svg>
    <div className="relative z-10 flex flex-col items-center">{children}</div>
  </div>
);

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-28 p-6 md:px-10 md:pb-40">
        {children}
      </div>
    </>
  );
};

export const Main = () => {
  const colors = [
    "bg-purple",
    "bg-orange",
    "bg-green",
    "bg-pink",
    "bg-blue",
    "bg-green",
  ];
  return (
    <>
      <main className="flex flex-col gap-6">
        <h2 className="font-playfair-display text-center text-[2.5rem]">
          My work
        </h2>
        <ul className="flex flex-col gap-16 md:grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
          {colors.map((i, index) => (
            <Project key={index} color={i} />
          ))}
        </ul>
      </main>
    </>
  );
};

export const Header = () => {
  const desktop = useMediaQuery({ minWidth: 1024 });
  const tablet = useMediaQuery({ minWidth: 768 });
  const [loaded, setLoaded] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  if (desktop) {
    return (
      <>
        <header className="relative flex items-center">
          <div className="bg-header relative flex h-120 flex-col justify-center overflow-hidden bg-cover bg-center bg-no-repeat">
            <div
              className={`bg-header absolute inset-0 bg-cover bg-center bg-no-repeat filter transition-all duration-700 ${
                loaded.desktop
                  ? "opacity-0 blur-none"
                  : "scale-105 opacity-100 blur-xl"
              }`}
            />
            <img
              onLoad={() => setLoaded((prev) => ({ ...prev, desktop: true }))}
              aria-hidden="true"
              src={headerImage}
              alt="Ashley Williams typing on a laptop"
              className={`${loaded.desktop ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
            />
            <h1 className="font-playfair-display absolute bottom-0 w-full px-4 pb-3 text-center text-6xl text-white">
              Ashley Williams
            </h1>
          </div>
          <Content />
        </header>
      </>
    );
  }

  if (tablet) {
    return (
      <header className="bg-transparent">
        <h1 className="font-playfair-display absolute top-4 right-0 z-30 text-7xl text-white">
          Ashley Williams
        </h1>
        <div className="mt-28 bg-white p-10 py-20 shadow-2xl">
          <div className="relative float-left -mt-48 mr-5 -ml-12 h-119.75 w-1/2 overflow-hidden">
            <div
              className={`bg-header-tablet absolute inset-0 bg-cover bg-center bg-no-repeat filter transition-all duration-700 ${
                loaded.tablet
                  ? "opacity-0 blur-none"
                  : "scale-105 opacity-100 blur-xl"
              }`}
            />
            <img
              aria-hidden="true"
              onLoad={() => setLoaded((prev) => ({ ...prev, tablet: true }))}
              src={headerImageTablet}
              alt="Ashley Williams typing on a laptop"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                loaded.tablet ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <h2 className="font-playfair-display mb-6 text-center text-4xl">
            About me
          </h2>
          <p className="font-roboto text-lg leading-relaxed text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            debitis minus ad expedita, quam libero optio placeat distinctio non
            accusantium at error ex repudiandae fugit, doloribus ab quos
            voluptatum. Consequatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quo quisquam repellendus reiciendis hic quas ullam
            eum minima vel corporis veritatis veniam, in dolorem perferendis
            consequatur dolore! Illum fuga at aspernatur?
          </p>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="relative flex flex-col gap-4">
        <div className="relative flex min-h-111 flex-col">
          <div
            className={`bg-header absolute inset-0 bg-cover bg-center bg-no-repeat filter transition-all duration-700 ${
              loaded.mobile ? "opacity-0 blur-none" : "opacity-100 blur-xl"
            }`}
          />
          <img
            onLoad={() => setLoaded((prev) => ({ ...prev, mobile: true }))}
            aria-hidden="true"
            src={headerImage}
            alt="Ashley Williams typing on a laptop"
            className={`${loaded.mobile ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
          />
          <h1 className="font-playfair-display absolute bottom-0 w-full px-4 pb-2 text-left text-7xl text-white">
            Ashley Williams
          </h1>
        </div>
        <Content />
      </header>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-white lg:px-6 lg:py-10 lg:shadow-2xl">
        <h2 className="font-playfair-display text-center text-4xl lg:text-left">
          About me
        </h2>
        <div className="flex flex-col gap-2 lg:gap-4">
          <p aria-label="main paragraph" className="font-roboto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            debitis minus ad expedita, quam libero optio placeat distinctio non
            accusantium at error ex repudiandae fugit, doloribus ab quos
            voluptatum. Consequatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quo quisquam repellendus reiciendis hic quas ullam
            eum minima vel corporis veritatis veniam, in dolorem perferendis
            consequatur dolore! Illum fuga at aspernatur?
          </p>
          <ul
            aria-label="links list"
            className="flex justify-center gap-4 lg:justify-end"
          >
            <ContentLink
              ariaLabel="github link"
              element={
                <img
                  className="size-10 lg:size-8"
                  aria-hidden="true"
                  src={github}
                  alt="github"
                />
              }
            />
            <ContentLink
              ariaLabel="linkedin link"
              element={
                <img
                  aria-hidden="true"
                  className="size-10 lg:size-8"
                  src={linkedin}
                  alt="linkedin"
                />
              }
            />
            <ContentLink
              ariaLabel="twitter link"
              element={
                <Twitter
                  aria-hidden="true"
                  className="size-10 fill-black lg:size-8"
                />
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};

const ContentLink = ({
  element,
  ariaLabel,
}: {
  element: ReactNode;
  ariaLabel: string;
}) => {
  return (
    <>
      <li>
        <a
          aria-label={ariaLabel}
          className="outline-offset-4 outline-black"
          target="_blank"
          role="link"
          href=""
        >
          {element}
        </a>
      </li>
    </>
  );
};

const Project = ({ color }: { color: string }) => {
  return (
    <>
      <li className="shadow-xl">
        <div>
          <div className={`${color} flex h-72 items-center justify-center p-6`}>
            <span
              className={`${color === "bg-orange" ? "text-black" : "text-white"} font-playfair-display text-center text-5xl`}
            >
              screenshot of project
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 pt-4 pb-16">
          <div className="flex items-center justify-between">
            <span className="font-playfair-display text-2xl">Project name</span>
            <div className="flex gap-4">
              <a
                aria-label="link to github"
                className="outline-offset-4"
                target="_blank"
                role="link"
                href=""
              >
                <img
                  aria-hidden="true"
                  className="size-6"
                  src={github}
                  alt="github"
                />
              </a>
              <a
                aria-label="external link"
                className="outline-offset-4"
                target="_blank"
                href=""
                role="link"
              >
                <ExternalLink aria-hidden="true" className="size-6" />
              </a>
            </div>
          </div>
          <p className="font-roboto">
            Short description of the project. Just a couple of sentences will
            do.
          </p>
        </div>
      </li>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-blue flex w-full flex-col items-center">
        <div className="flex max-w-6xl flex-col md:flex-row md:p-10">
          <div className="flex flex-col gap-6 px-6 pt-8 pb-20 md:w-2/3 md:justify-center md:px-0 md:pt-0 md:pb-0">
            <h3 className="font-playfair-display text-center text-5xl text-white md:text-left">
              Contact me
            </h3>
            <p className="font-roboto text-2xl text-white md:w-96">
              Please get in touch if you think our work could be mutually
              beneficial!
            </p>
            <div className="flex flex-col">
              <span className="font-roboto md:text-2xl md:text-white">
                1234 Random Road
              </span>
              <span className="font-roboto md:text-2xl md:text-white">
                Random Town, California 12345
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              <FooterItem
                element={<Phone aria-hidden="true" />}
                text="555-555-5555"
              />
              <FooterItem
                element={<Mail aria-hidden="true" />}
                text="ashleywilliams.is.not.real@gmail.com"
              />
            </ul>
            <ul className="flex justify-center gap-6 md:justify-start">
              <ContentLink
                ariaLabel="github link"
                element={
                  <img
                    aria-hidden="true"
                    className="size-10 object-contain"
                    src={github}
                    alt="github"
                  />
                }
              />
              <ContentLink
                ariaLabel="linkedin link"
                element={
                  <img
                    aria-hidden="true"
                    className="size-10 object-contain"
                    src={linkedin}
                    alt="linkedin"
                  />
                }
              />
              <ContentLink
                ariaLabel="twitter link"
                element={
                  <Twitter aria-hidden="true" className="size-10 fill-black" />
                }
              />
            </ul>
          </div>
          <div className="bg-footer bg-contain bg-no-repeat md:w-1/3">
            <img
              aria-hidden="true"
              loading="lazy"
              src={footerImage}
              alt="ashley williams typing on a laptop"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

const FooterItem = ({
  element,
  text,
}: {
  element: ReactNode;
  text: string;
}) => {
  return (
    <>
      <li className="font-roboto flex items-center gap-2 text-black md:text-2xl md:text-white">
        {element}
        {text}
      </li>
    </>
  );
};
