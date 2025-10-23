import { ExternalLink, Twitter, Phone, Mail } from "lucide-react";
import type { ReactNode } from "react";
import footerImage from "../assets/461651565_2309674672719173_6514120453975065192__n.jpg";
import headerImage from "../assets/pexels-shvetsa-5711949.jpg";
import github from "../assets/github-142-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import { useMediaQuery } from "react-responsive";

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="relative">
    <svg
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
    <div className="relative z-10">{children}</div>
  </div>
);

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col gap-28 p-6 md:p-10">{children}</div>
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
        <ul className="flex flex-col gap-16 md:grid md:grid-cols-2 md:grid-rows-3">
          {colors.map((i) => (
            <Project color={i} />
          ))}
        </ul>
      </main>
    </>
  );
};

export const Header = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  if (tablet) {
    return (
      <>
        <header className="relative bg-transparent">
          <h1 className="font-playfair-display absolute top-4 right-0 z-30 text-7xl text-white">
            Ashley Williams
          </h1>

          <div className="relative mt-28 bg-white p-10 py-20 shadow-2xl">
            <img
              src={headerImage}
              alt="Ashley Williams"
              className="float-left -mt-48 mr-6 -ml-12 w-2/4"
            />

            <h2 className="font-playfair-display mb-6 text-center text-4xl">
              About me
            </h2>

            <p className="font-roboto text-lg leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              debitis minus ad expedita, quam libero optio placeat distinctio
              non accusantium at error ex repudiandae fugit, doloribus ab quos
              voluptatum. Consequatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quo quisquam repellendus reiciendis hic quas
              ullam eum minima vel corporis veritatis veniam, in dolorem
              perferendis consequatur dolore! Illum fuga at aspernatur?
            </p>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      <header className="relative flex flex-col gap-4">
        <div className="relative flex flex-col">
          <img src={headerImage} alt="header image" />
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
      <div className="flex flex-col gap-4 bg-white">
        <h2 className="font-playfair-display text-center text-4xl">About me</h2>
        <div className="flex flex-col gap-2">
          <p className="font-roboto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            debitis minus ad expedita, quam libero optio placeat distinctio non
            accusantium at error ex repudiandae fugit, doloribus ab quos
            voluptatum. Consequatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quo quisquam repellendus reiciendis hic quas ullam
            eum minima vel corporis veritatis veniam, in dolorem perferendis
            consequatur dolore! Illum fuga at aspernatur?
          </p>
          <ul className="flex justify-center gap-4">
            <ContentLink
              element={<img className="size-10" src={github} alt="github" />}
            />
            <ContentLink
              element={
                <img className="size-10" src={linkedin} alt="linkedin" />
              }
            />
            <ContentLink element={<Twitter className="size-10 fill-black" />} />
          </ul>
        </div>
      </div>
    </>
  );
};

const ContentLink = ({ element }: { element: ReactNode }) => {
  return (
    <>
      <li>
        <a href="">{element}</a>
      </li>
    </>
  );
};

const Project = ({ color }: { color: string }) => {
  return (
    <>
      <div className="shadow-xl">
        <div>
          <div className={`${color} flex h-72 items-center justify-center p-6`}>
            <span className="font-playfair-display text-center text-5xl text-white">
              screenshot of project
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 pt-4 pb-16">
          <div className="flex items-center justify-between">
            <span className="font-playfair-display text-2xl">Project name</span>
            <div className="flex gap-4">
              <a href="">
                <img className="size-6" src={github} alt="github" />
              </a>
              <a href="">
                <ExternalLink className="size-6" />
              </a>
            </div>
          </div>
          <p className="font-roboto">
            Short description of the project. Just a couple of sentences will
            do.
          </p>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-blue flex flex-col md:flex-row md:p-10">
        <div className="flex flex-col gap-6 px-6 pt-8 pb-20 md:w-2/3 md:justify-center md:px-0 md:pt-0 md:pb-0">
          <h4 className="font-playfair-display text-center text-5xl text-white md:text-left">
            Contact me
          </h4>
          <p className="font-roboto text-2xl text-white md:w-96">
            Please get in touch if you think our work could be mutually
            beneficial!
          </p>
          <div className="flex flex-col">
            <span className="font-roboto text-white md:text-2xl">
              1234 Random Road
            </span>
            <span className="font-roboto text-white md:text-2xl">
              Random Town, California 12345
            </span>
          </div>
          <ul className="flex flex-col gap-2">
            <FooterItem element={<Phone />} text="555-555-5555" />
            <FooterItem
              element={<Mail />}
              text="ashleywilliams.is.not.real@gmail.com"
            />
          </ul>
          <ul className="flex justify-center gap-6 md:justify-start">
            <ContentLink
              element={
                <img
                  className="size-10 object-contain"
                  src={github}
                  alt="github"
                />
              }
            />
            <ContentLink
              element={
                <img
                  className="size-10 object-contain"
                  src={linkedin}
                  alt="linkedin"
                />
              }
            />
            <ContentLink element={<Twitter className="size-10 fill-black" />} />
          </ul>
        </div>
        <img src={footerImage} className="md:w-1/3" alt="footer image" />
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
      <li className="font-roboto flex items-center gap-2 text-white md:text-2xl">
        {element}
        <span>{text}</span>
      </li>
    </>
  );
};
