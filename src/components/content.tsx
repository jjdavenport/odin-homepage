import {
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Phone,
  Mail,
} from "lucide-react";
import type { ReactNode } from "react";
import footerImage from "../assets/pexels-artempodrez-4492216.jpg";
import headerImage from "../assets/pexels-shvetsa-5711949.jpg";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export const Main = () => {
  const colors = [
    "bg-red",
    "bg-yellow",
    "bg-green",
    "bg-blue",
    "bg-indigo",
    "bg-purple",
  ];
  return (
    <>
      <main>
        <h2>My work</h2>
        <ul>
          {colors.map((i) => (
            <Project color={i} />
          ))}
        </ul>
      </main>
    </>
  );
};

export const Header = () => {
  return (
    <>
      <header>
        <Content />
        <div>
          <img src={headerImage} alt="header image" />
          <h1>Ashley Williams</h1>
        </div>
      </header>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis
          minus ad expedita, quam libero optio placeat distinctio non
          accusantium at error ex repudiandae fugit, doloribus ab quos
          voluptatum. Consequatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo quisquam repellendus reiciendis hic quas ullam
          eum minima vel corporis veritatis veniam, in dolorem perferendis
          consequatur dolore! Illum fuga at aspernatur?
        </p>
        <ul>
          <ContentLink element={<Github />} />
          <ContentLink element={<Linkedin />} />
          <ContentLink element={<Twitter />} />
        </ul>
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
      <div>
        <div>
          <div className={`${color}`}>
            <span>screenshot of project</span>
          </div>
        </div>
        <div>
          <div>
            <span>Project name</span>
            <div>
              <a href="">
                <Github />
              </a>
              <a href="">
                <ExternalLink />
              </a>
            </div>
          </div>
          <p>
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
      <footer>
        <div>
          <h4>Contact me</h4>
          <p>
            Please get in touch if you think our work could be mutually
            beneficial! 1234 Random Road, Random Town, California 12345
          </p>
          <ul>
            <FooterItem element={<Phone />} text="555-555-5555" />
            <FooterItem
              element={<Mail />}
              text="ashleywilliams.is.not.real@example.com"
            />
          </ul>
          <ul>
            <ContentLink element={<Github />} />
            <ContentLink element={<Linkedin />} />
            <ContentLink element={<Twitter />} />
          </ul>
        </div>
        <img src={footerImage} alt="footer image" />
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
      <li>
        {element}
        <span>{text}</span>
      </li>
    </>
  );
};
