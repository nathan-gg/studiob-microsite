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
import IMThumbnail from "./assets/im-thumbnail.webm";
import bankmentThumbnail from "./assets/bankment-thumbnail.webm";
import team from "./assets/team.webp";
import GBLanding from "./assets/green-basil-landing.webp";
import GBThumbnail from "./assets/gb-thumbnail.webm";
import KeypadDesktop from "./assets/keypad-desktop.webm";
import KeypadTablet from "./assets/keypad-tablet.webm";
import KeypadMobile from "./assets/keypad-mobile.webm";

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
      {/* <IntroAnimation /> */}
      <div className="min-h-screen bg-virgil font-medium  tracking-tight text-coal ">
        <header
          className={`App-header fixed top-0 flex  w-full min-h-14 lg:min-h-24 h-fit py-3 px-3 lg:px-8 justify-between text-virgil items-center transition-transform duration-300 ease-in-out z-40 bg-[#0c0c0c80] rounded-b-lg  ${
            scrollY > window.innerHeight
              ? "bg-virgil text-coal drop-shadow-sm drop-shadow-steam"
              : "bg-transparent"
          } ${headerHidden ? "-translate-y-full" : "translate-y-0"}`}
        >
          <a
            className="App-link  h-fit hover:scale-102 hover:transition-all hover:duration-100"
            href="/"
            rel="noopener noreferrer"
          >
            {scrollY > window.innerHeight ? (
              <img
                src={headerLogoCoal}
                className="h-6 lg:h-12 sm:-mt-1 md:mt-0"
                alt="logo"
              />
            ) : (
              <img
                src={headerLogo}
                className="h-6 lg:h-12 sm:-mt-1 md:mt-0"
                alt="logo"
              />
            )}

            {/* <img src={headerLogo} className="h-7 sm:-mt-1" alt="logo" /> */}
          </a>
          <a
            className={`text-[16px] leading-7 pr-3.5 lg:text-2xl lg:leading-10 px-3 py-1 lg:px-6 lg:py-2 outline-1 lg:outline-2 text-center self-center justify-center rounded-xl transition-all duration-200 w-fit lg:min-h-14 ${
              scrollY > window.innerHeight
                ? "outline-coal text-coal hover:text-virgil hover:bg-coal "
                : "bg-[#6c6c6c80] hover:bg-virgil hover:text-coal outline-none"
            }`}
            href="mailto:connectwithstudiob@gmail.com"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </header>
        {/* <div className="showreel mb-12 lg:mb-15 bg-[url('./assets/hero-bg.webp')] bg-cover bg-center h-fit lg:max-h-screen w-full flex justify-center items-center">
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
        </div> */}

        {/* <div>
          <video
            className="absolute z-10 max-h-screen object-cover w-full"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={KeypadDesktop} type="video/mp4" />
          </video>
          <div className="z-20 mb-12 lg:mb-15 lg:h-screen lg:px-8 lg:pb-18 items-end h-fit lg:max-h-screen w-full flex ">
            <p className="text-virgil lg:text-[80px] lg:leading-22 lg:w-270">
              <span className="text-steam">
                An independent design agency focused on
              </span>{" "}
              uncovering what’s possible and designing what’s next.
            </p>
          </div>
        </div> */}

        {/* <div className="relative isolate mb-12 lg:mb-15 h-screen sm:max-h-150 lg:min-h-screen lg:h-screen">
          <video
            className="hidden lg:flex lg:absolute inset-0 -z-10 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src={KeypadDesktop} type="video/mp4" />
          </video>
          <video
            className="hidden sm:flex sm:absolute lg:hidden inset-0 -z-10 w-full object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src={KeypadTablet} type="video/mp4" />
          </video>
          <video
            className="absolute sm:hidden inset-0 -z-10  w-full h-full object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src={KeypadMobile} type="video/mp4" />
          </video>

          <div className="relative z-10 flex h-full w-full items-end px-3 pb-4 lg:px-8 lg:pb-18">
            <p className="text-virgil text-[24px] leading-7 w-80 lg:text-[80px] lg:leading-22 lg:w-270">
              <span className="text-steam">
                An independent design agency focused on
              </span>
              <br></br> uncovering what’s possible and designing what’s next.
            </p>
          </div>
        </div> */}

        <div className="relative isolate mb-12 lg:mb-15 h-screen sm:h-auto sm:aspect-4/3 lg:aspect-auto lg:h-screen">
          {/* Desktop */}
          <video
            className="hidden lg:block absolute inset-0 -z-10 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src={KeypadDesktop} type="video/mp4" />
          </video>

          {/* Tablet */}
          <video
            className="hidden sm:block lg:hidden absolute inset-0 -z-10 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src={KeypadTablet} type="video/mp4" />
          </video>

          {/* Mobile */}
          <video
            className="sm:hidden absolute inset-0 -z-10 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src={KeypadMobile} type="video/mp4" />
          </video>

          {/* Text overlay */}
          <div className="absolute inset-0 z-10 flex items-end px-3 pb-4 sm:pb-8 lg:px-8 lg:pb-18">
            <p className="text-virgil text-[24px] leading-7 w-80 sm:text-[40px] sm:leading-11 sm:w-120 lg:w-200 lg:text-[60px] lg:leading-16 2xl:text-[80px] 2xl:leading-20 2xl:w-270">
              <span className="text-steam">
                An independent design agency focused on
              </span>
              <br /> uncovering what’s possible and designing what’s next.
            </p>
          </div>
        </div>

        <div className="mission py-12 lg:py-15 px-3 lg:px-8 text-[20px] sm:text-[28px]  lg:text-5xl max-w-90 sm:max-w-170 lg:max-w-304 ">
          <p className="leading-7 sm:leading-9 lg:leading-14">
            At Studio B, our mission is to{" "}
            <span className="text-cherry-500">
              uncover what makes your business unique
            </span>
            , and discover how to harness those qualities to create design
            products that feel{" "}
            <span className="text-cherry-500">
              memorable and aligned with your brand identity.
            </span>
          </p>
        </div>

        <div class="h-fit px-3 lg:px-8 ">
          <img
            src={team}
            className="rounded-sm sm:rounded-lg w-full"
            alt="logo"
          />
        </div>

        <div className="about h-fit px-3 lg:px-8 pt-12 lg:py-15 gap-12 flex-col flex ">
          <div className="flex lg:justify-between flex-col lg:flex-row gap-6 b">
            <p className="sm:text-[28px] sm:leading-9 lg:text-[36px] lg:leading-11 text-[20px] leading-7 text-asphalt">
              What We Do Best
            </p>
            <div className="sm:text-[40px] sm:leading-12 lg:text-[40px] lg:leading-12 text-[20px] leading-7 lg:w-4xl flex flex-col gap-2 lg:gap-3  max-w-150 2xl:max-w-280 2xl:w-full">
              <p>User Interface</p>
              <p>Web Development</p>
              <p>User Experience</p>
              <p>Brand Systems and Strategy</p>
              <p>Digital Marketing</p>
              <p>Motion Graphics</p>
            </div>
          </div>
          {/* <div className="flex lg:justify-between flex-col lg:flex-row gap-6 ">
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
          </div> */}
        </div>

        <div className="projects pt-12 lg:pt-15 px-3 lg:px-8 flex-col flex gap-6 text-[16px] leading-6 sm:text-[20px] sm:leading-7 lg:leading-8 lg:text-2xl">
          <div className="flex flex-col w-full gap-2">
            <video
              className="flex-1 min-w-0 object-cover rounded-sm sm:rounded-lg"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={IMThumbnail} type="video/mp4" />
            </video>
            <p className="lg:w-full w-80 sm:w-150">
              Creative media consulting at full force: a reimagined web
              experience for{" "}
              <a
                href="https://www.industrymediagroup.ca/"
                className=" hover:underline text-cherry-500"
                target="blank"
              >
                Industry Media Group
              </a>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-6 ">
            <div className="flex flex-col  gap-2 h-fit w-full lg:w-2/5 ">
              <video
                className="flex-1 min-w-0 h-4/5 object-cover rounded-sm sm:rounded-lg"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src={GBThumbnail} type="video/mp4" />
              </video>
              {/* <p className="">
                Bringing in the New Year with{" "}
                <a
                  href="https://www.instagram.com/bankment_/"
                  className=" hover:underline"
                >
                  BANKMENT
                </a>
              </p> */}
              <p className="lg:w-full w-80 sm:w-130">
                Modernizing Green Basil Thai Restaurant’s web identity
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-3/5">
              <video
                className="flex-1 min-w-0 h-auto object-cover rounded-sm sm:rounded-lg"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src={bankmentThumbnail} type="video/mp4" />
              </video>
              <p className="lg:w-full w-60 sm:w-130">
                Creating a punchier brand identity alongside{" "}
                <a
                  href="https://www.instagram.com/bankment_/"
                  className=" hover:underline text-cherry-500"
                  target="blank"
                >
                  BANKMENT
                </a>{" "}
                for their Stellar New Year DJ event
              </p>
            </div>
          </div>
        </div>

        <div className="coming-soon h-fit px-3 lg:px-8 py-12 sm:py-22 lg:py-30 2xl:py-44 flex flex-col gap-3 sm:gap-8 items-center text-center">
          {/* <img src={team} className=" w-full" alt="logo" /> */}
          <p class="w-full  lg:max-w-180 text-steel sm:text-[28px] sm:leading-8 text-[16px] leading-6 lg:leading-10 lg:text-[32px]">
            Our Full Website Is Under Construction
          </p>
          <p className="w-full max-w-76 sm:max-w-155 lg:max-w-230 text-asphalt sm:text-[40px] sm:leading-12 text-[20px] leading-7  ">
            While we continue building out our full web experience, if you have
            any questions or inquiries,{" "}
            <span className="text-cherry-500">
              get in touch using the links below.
            </span>
          </p>
        </div>

        <footer
          className="relative isolate pb-[-2] lg:pt-75 pt-40 gap-12 h-fit px-6 lg:px-8 flex flex-col justify-end
      
          bg-[radial-gradient(ellipse_900px_600px_at_bottom,#E71936_0%,#16136F_70%,#080736_80%,#0C0C0C_100%)]
      
          lg:bg-[radial-gradient(ellipse_1800px_850px_at_bottom,#E71936_0%,#16136F_70%,#080736_80%,#0C0C0C_100%)]
      
          2xl:bg-[radial-gradient(ellipse_4000px_1100px_at_bottom,#E71936_0%,#16136F_70%,#080736_80%,#0C0C0C_100%)]
          
          "
        >
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>

            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg> */}

          {/* <svg
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-40 mix-blend-overlay"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg> */}

          <div className=" pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-overlay bg-[url('./assets/noise.webp')]" />

          <div className="flex lg:flex-row flex-col justify-between w-full gap-8 ">
            <div className="flex flex-row flex-nowrap  justify-between gap-3">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row flex-nowrap w-full lg:min-w-84 lg:justify-between gap-3 *:rounded-lg"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Ex. studiob@fromstudiob.ca"
                  className="px-6 py-3 w-full sm:min-w-90 sm:w-fit  placeholder:text-[16px] text-[16px] placeholder:leading-6 leading-6 sm:placeholder:text-2xl sm:text-2xl placeholder:text-left text-left  lg:placeholder:text-left lg:text-left sm:placeholder:leading-8 sm:leading-8 placeholder:align-middle align-middle placeholder:text-[#ccc8c880] text-nowrap text-virgil outline-1 outline-virgil"
                />
                <ValidationError field="email" errors={state.errors} />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`px-6 py-3 text-[20px] leading-7 sm:text-[24px] sm:leading-8 text-center  w-full sm:w-fit outline-2 outline-[#ccc8c84d] cursor-pointer transition-all duration-100 text-nowrap lg:w-70 ${
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
