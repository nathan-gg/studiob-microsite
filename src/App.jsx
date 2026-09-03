import { useState, useEffect, useRef } from "react";

// import logo from "./logo.svg";
import footerLogo from "./assets/footer-logo.svg";
import headerLogo from "./assets/header-logo.svg";
import headerLogoCoal from "./assets/header-logo-coal.svg";
import asterisk from "./assets/asterisk.svg";
import whiteAsterisk from "./assets/white-asterisk.svg";
import steamAsterisk from "./assets/steam-asterisk.svg";
import filler from "./assets/filler.webp";
import heroFiller from "./assets/hero-filler.webp";
import heroBG from "./assets/hero-bg.webp";
import bankmentFiller from "./assets/bankment-filler.webp";
import RBCFiller from "./assets/rbc-filler.webp";
import RBCThumbnail from "./assets/rbc-thumbnail.webp";
import IMThumbnail from "./assets/im-thumbnail.webp";
import bankmentThumbnail from "./assets/bankment-thumbnail.webp";
import team from "./assets/team.webp";
import GBLanding from "./assets/green-basil-landing.webp";

import heroBaldy from "./assets/hero-baldy.webm";
import heroBamigbaddie from "./assets/hero-bamigbaddie.webm";
import heroGlian from "./assets/hero-glian.webm";

import { Icon } from "@iconify/react";

import "./App.css";

import IntroAnimation from "./IntroAnimation";
import DigitalClock from "./DigitalClock";
import useScrollDirection from "./useScrollDirection";

import { useForm, ValidationError } from "@formspree/react";

function App() {
  const [state, handleSubmit] = useForm("xnpqdpyr");
  const { hidden: headerHidden, scrollY } = useScrollDirection();
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IntroAnimation />
      <div className="min-h-screen bg-virgil font-medium  tracking-tight text-coal ">
        <header
          className={`App-header fixed top-0 flex  w-full min-h-16 h-fit py-3 px-3 lg:px-8 justify-between text-virgil items-center transition-transform duration-300 ease-in-out z-40 bg-[#0c0c0c80] rounded-b-lg ${
            scrollY > window.innerHeight
              ? "bg-virgil text-coal"
              : "bg-transparent"
          } ${headerHidden ? "-translate-y-full" : "translate-y-0"}`}
        >
          <a
            className="App-link  h-7 hover:scale-102 hover:transition-all hover:duration-100"
            href="/"
            rel="noopener noreferrer"
          >
            {scrollY > window.innerHeight ? (
              <img src={headerLogoCoal} className="h-7 sm:-mt-1" alt="logo" />
            ) : (
              <img src={headerLogo} className="h-7 sm:-mt-1" alt="logo" />
            )}

            {/* <img src={headerLogo} className="h-7 sm:-mt-1" alt="logo" /> */}
          </a>
          <div className=" sm:text-[16px] sm:leading-6 lg:text-2xl lg:leading-8 w-fit h-fit flex items-center flex-row sm:gap-2 lg:gap-5">
            <span
              className={`hidden sm:flex gap-2 items-center ${
                scrollY > window.innerHeight ? " text-coal" : "text-steam"
              }`}
            >
              <p classname="text-nowrap">Vancouver, BC</p>
              {/* <img src={steamAsterisk} className=" w-2" alt="logo" /> */}

              {scrollY > window.innerHeight ? (
                <img src={asterisk} className=" w-2" alt="logo" />
              ) : (
                <img src={steamAsterisk} className=" w-2" alt="logo" />
              )}
              <DigitalClock />
            </span>

            <a
              className={`text-[16px] leading-6 pr-7 lg:text-2xl lg:leading-8 px-6 py-2 outline-1 lg:outline-2 text-center align-center  rounded-full transition-all duration-200 w-fit hover:outline-none ${
                scrollY > window.innerHeight
                  ? "outline-coal text-coal hover:text-virgil hover:bg-coal"
                  : "outline-virgil hover:bg-virgil hover:text-coal "
              }`}
              href="mailto:connectwithstudiob@gmail.com"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </header>
        <div className="showreel mb-12 lg:mb-15 bg-[url('./assets/hero-bg.webp')] bg-cover bg-center h-fit lg:max-h-screen w-full flex justify-center items-center">
          <div className="flex w-full h-fit lg:h-full lg:max-h-screen px-3 py-16 lg:px-60 lg:py-30 justify-between items-center gap-3 lg:gap-8 *:rounded-lg ">
            <video
              className="flex-1 min-w-0 h-auto aspect-9/16 object-cover "
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={heroBamigbaddie} type="video/mp4" />
            </video>
            <video
              className="flex-1 min-w-0 h-auto aspect-9/16 object-cover"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={heroBaldy} type="video/mp4" />
            </video>
            <video
              className="flex-1 min-w-0 h-auto aspect-9/16 object-cover"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={heroGlian} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mission py-12 lg:py-15 px-3 lg:px-8 text-[20px] sm:text-[28px]  lg:text-5xl max-w-7xl ">
          <p className="leading-7 sm:leading-9 lg:leading-14">
            <span className="text-cherry-500">Studio B</span> is a design agency
            comprised of 5 designers, whose work with industry leaders spans
            UX/UI, brand, marketing and digital. With every project, we bring{" "}
            <span className="text-cherry-500">
              bespoke solutions, bold approaches, bona-fide communication and
              boundless growth
            </span>{" "}
            for our clients.
          </p>
        </div>
        <div className="projects py-12 lg:py-15 px-3 lg:px-8 flex-col flex gap-6 text-[16px] leading-6 sm:text-[20px] sm:leading-7 lg:leading-8 lg:text-2xl">
          <div className="flex flex-col w-full gap-2">
            <img src={RBCThumbnail} className=" w-full rounded-lg" alt="logo" />
            <p className="">
              Reimagining the Interac e-Transfer experience for mobile bankers
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-6 ">
            <div className="flex flex-col  gap-2 w-full lg:w-2/5 ">
              <img
                src={bankmentThumbnail}
                className="w-full rounded-lg "
                alt="logo"
              />
              <p className="">
                Bringing in the New Year with{" "}
                <a
                  href="https://www.instagram.com/bankment_/"
                  className="text-cherry-500 hover:underline"
                >
                  BANKMENT
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-3/5">
              <img
                src={IMThumbnail}
                className=" w-full rounded-lg"
                alt="logo"
              />
              <p className="">
                Creating a bold web identity for{" "}
                <a
                  href="https://www.industrymediagroup.ca/"
                  className="text-cherry-500 hover:underline"
                >
                  Industry Media Group
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="about h-fit px-3 lg:px-8 py-12 lg:py-15 gap-12 flex-col flex ">
          <div className="flex lg:justify-between flex-col lg:flex-row gap-6 b">
            <p className="sm:text-[28px] sm:leading-9 lg:text-[36px] lg:leading-11 text-[20px] leading-7 text-asphalt">
              What do we specialize in?
            </p>
            <div className="sm:text-[40px] sm:leading-12 lg:text-5xl lg:leading-14 text-[28px] leading-9 lg:w-4xl flex flex-col gap-2 lg:gap-3  max-w-150 2xl:max-w-280 2xl:w-full">
              <p>User Interface</p>
              <p>Web Development</p>
              <p>User Experience</p>
              <p>Brand Systems and Strategy</p>
              <p>Digital Marketing</p>
              <p>Motion Graphics</p>
            </div>
          </div>
          <div className="flex lg:justify-between flex-col lg:flex-row gap-6 ">
            <p className="sm:text-[28px] sm:leading-9 lg:text-[36px] lg:leading-11 text-[20px] leading-7 text-asphalt">
              How did we start?
            </p>
            <div className="sm:text-[40px] sm:leading-12 lg:text-5xl lg:leading-14 text-[28px] leading-9 lg:w-4xl flex  md:max-w-130  lg:max-w-150 2xl:max-w-280 2xl:w-full">
              <p>
                We began as students in a collaborative studio at SFU. Studio B
                symbolizes our love of collaboration, and ability to design
                impactful user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="coming-soon h-fit px-3 lg:px-8 py-12 lg:py-15 flex flex-col gap-3 lg:gap-6 ">
          <img src={team} className=" w-full" alt="logo" />
          <p className="text-asphalt sm:text-[20px] sm:leading-7 text-[16px] leading-6 lg:leading-10 lg:text-[32px]">
            Currently hard at work constructing our full site,{" "}
            <span className="text-cherry-500">coming very soon!</span>
          </p>
        </div>
        <footer
          className=" pb-[-2] lg:pt-75 pt-40 gap-12 h-fit px-6 lg:px-8 flex flex-col justify-end
      bg-[radial-gradient(ellipse_900px_700px_at_bottom,#E71936_0%,#16136F_70%,#080736_80%,#0C0C0C_100%)]
      lg:bg-[radial-gradient(ellipse_1800px_1000px_at_bottom,#E71936_0%,#16136F_70%,#080736_80%,#0C0C0C_100%)]
      2xl:bg-[radial-gradient(ellipse_4000px_1500px_at_bottom,#E71936_0%,#16136F_70%,#080736_80%,#0C0C0C_100%)]"
        >
          <div className="flex lg:flex-row flex-col justify-between w-full gap-8 ">
            <div className="flex flex-row flex-nowrap  justify-between gap-3">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row flex-nowrap w-full lg:min-w-84 lg:justify-between gap-3 *:rounded-full"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Ex. studiob@fromstudiob.ca"
                  className="px-6 py-3 w-full sm:min-w-90 sm:w-fit  placeholder:text-[16px] text-[16px] placeholder:leading-6 leading-6 sm:placeholder:text-2xl sm:text-2xl placeholder:text-left text-left  lg:placeholder:text-left lg:text-left sm:placeholder:leading-8 sm:leading-8
                 placeholder:align-middle align-middle placeholder:text-[#ccc8c880] text-nowrap text-virgil outline-1 outline-virgil"
                />
                <ValidationError field="email" errors={state.errors} />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`px-6 py-3 text-[20px] leading-7 sm:text-[24px] sm:leading-8 text-center  rounded-full w-full sm:w-fit outline-2 outline-[#ccc8c84d] cursor-pointer transition-all duration-100 text-nowrap lg:w-70 ${
                    state.succeeded
                      ? " outline-virgil bg-virgil text-coal outline-none"
                      : "bg-[#6c6c6c80] text-virgil hover:outline-none hover:bg-virgil hover:text-coal"
                  }`}
                >
                  {state.succeeded ? "Joined!" : "Join our Mailing List!"}
                </button>
              </form>
            </div>
            <div className="flex flex-row flex-nowrap justify-between sm:justify-start gap-3 text-virgil lg:*:text-2xl text-xl *:bg-[#6c6c6c80] *:rounded-full *:w-fit *:text-center *:outline-2 *:outline-[#ccc8c84d] *:p-3 lg:*:p-4 *:hover:outline-none *:transition-all *:duration-100">
              <a
                className="hover:bg-virgil hover:text-steel"
                href="mailto:connectwithstudiob@gmail.com"
                rel="noopener noreferrer"
              >
                <Icon icon="eva:email-fill" />
              </a>
              <a
                className="hover:bg-virgil hover:text-steel"
                href="https://www.linkedin.com/company/from-studio-b/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:linkedin-fill" />
              </a>
              <a
                className="hover:bg-virgil hover:text-steel"
                href="https://www.instagram.com/fromstudiob"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:instagram-fill" />
              </a>
              <a
                className="hover:bg-virgil hover:text-steel"
                href="https://www.x.com/fromstudiob"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="bi:twitter-x" />
              </a>
              {/* <a
                className="hover:bg-virgil hover:text-steel"
                href="https://www.tiktok.com/fromstudiob"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:tiktok-fill" />
              </a> */}
            </div>
          </div>
          <img
            src={footerLogo}
            className=" mix-blend-soft-light w-full"
            alt="logo"
          />
        </footer>
      </div>
    </>
  );
}

export default App;
