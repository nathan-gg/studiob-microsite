// import logo from "./logo.svg";
import footerLogo from "./assets/footer-logo.svg";
import headerLogo from "./assets/header-logo.svg";
import asterisk from "./assets/asterisk.svg";
import whiteAsterisk from "./assets/white-asterisk.svg";
import steamAsterisk from "./assets/steam-asterisk.svg";
import filler from "./assets/filler.png";
import heroFiller from "./assets/hero-filler.png";
import heroBG from "./assets/hero-bg.png";
import bankmentFiller from "./assets/bankment-filler.png";
import RBCFiller from "./assets/rbc-filler.png";
import RBCThumbnail from "./assets/rbc-thumbnail.png";
import IMThumbnail from "./assets/im-thumbnail.png";
import bankmentThumbnail from "./assets/bankment-thumbnail.png";
import team from "./assets/team.png";
import GBLanding from "./assets/green-basil-landing.png";

import heroBaldy from "./assets/hero-baldy.mp4";
import heroBamigbaddie from "./assets/hero-bamigbaddie.mp4";
import heroGlian from "./assets/hero-glian.mp4";

import { Icon } from "@iconify/react";

import "./App.css";

import DigitalClock from "./DigitalClock";

function App() {
  return (
    <div className="min-h-screen bg-virgil font-medium  tracking-tight text-coal ">
      <header className="App-header absolute top-0 flex lg:pt-10 w-full min-h-16 h-fit py-3 px-3 lg:px-8 justify-between text-virgil items-center ">
        <a className="App-link  h-7" href="/" rel="noopener noreferrer">
          <img src={headerLogo} className="h-7" alt="logo" />
        </a>
        <div className=" text-2xl leading-8 w-fit h-fit flex items-center flex-row gap-5">
          <span className="hidden lg:flex gap-2 items-center text-steam">
            <p classname="text-nowrap">Vancouver, BC</p>
            <img src={steamAsterisk} className=" w-2" alt="logo" />
            <DigitalClock />
          </span>

          <a
            className="text-[16px] leading-6 pr-7 lg:text-2xl lg:leading-8 px-6 py-2 outline-1 lg:outline-2 text-center align-center outline-virgil rounded-full w-fit hover:bg-virgil hover:text-coal"
            href="/"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </header>
      {/* <div className="showreel pb-12 lg:pb-15 bg-[url('./assets/hero-bg.png')] bg-cover bg-center min-h-screen w-full flex justify-center items-center">
      

        <div className="flex w-full h-full px-60 py-30 justify-between items-center *:rounded-lg">
          <video
            width="315"
            height="560"
            className=""
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={heroBamigbaddie} type="video/mp4" />
          </video>
          <video width="315" height="560" autoPlay muted playsInline loop>
            <source src={heroBaldy} type="video/mp4" />
          </video>
          <video width="315" height="560" autoPlay muted playsInline loop>
            <source src={heroGlian} type="video/mp4" />
          </video>
        </div>
      </div> */}
      <div className="showreel  bg-[url('./assets/hero-bg.png')] bg-cover bg-center h-fit lg:min-h-screen w-full flex justify-center items-center">
        <div className="flex w-full h-fit lg:h-full px-3 py-16 lg:px-60 lg:py-30 justify-between items-center gap-3 lg:gap-8 *:rounded-lg ">
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

      <div className="mission py-12 lg:py-15 px-3 lg:px-8 text-[20px]  lg:text-5xl max-w-7xl ">
        <p className="leading-7 lg:leading-14">
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
      <div className="projects min-h-screen py-12 lg:py-15 px-3 lg:px-8 flex-col flex gap-6 text-[16px] leading-6 lg:leading-8 lg:text-2xl">
        <div className="flex flex-col w-full gap-2">
          <img src={RBCThumbnail} className=" w-full rounded-lg" alt="logo" />
          <p className="">
            Reimagining the Interac e-Transfer experience for mobile bankers
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-6 ">
          <div className="flex flex-col w-full gap-2 max-w-140">
            <img
              src={bankmentThumbnail}
              className=" w-full rounded-lg"
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
          <div className="flex flex-col w-full gap-2">
            <img src={IMThumbnail} className=" w-full rounded-lg" alt="logo" />
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

      <div className="about h-fit lg:min-h-screen px-3 lg:px-8 py-12 lg:py-15 gap-24 flex-col flex">
        <div className="flex lg:justify-between flex-col lg:flex-row gap-6">
          <p className="lg:text-[36px] lg:leading-11 text-[20px] leading-7 text-asphalt">
            What do we specialize in?
          </p>
          <div className="lg:text-5xl lg:leading-14 text-[28px] leading-9 lg:w-4xl flex flex-col gap-2 lg:gap-3">
            <p>User Interface</p>
            <p>Web Development</p>
            <p>User Experience</p>
            <p>Brand Systems and Strategy</p>
            <p>Digital Marketing</p>
            <p>Motion Graphics</p>
          </div>
        </div>
        <div className="flex lg:justify-between flex-col lg:flex-row gap-6">
          <p className="lg:text-[36px] lg:leading-11 text-[20px] leading-7 text-asphalt">
            How did we start?
          </p>
          <div className="lg:text-5xl lg:leading-14 text-[28px] leading-9 lg:w-4xl flex ">
            <p>
              We began as students in a collaborative studio at SFU Surrey
              Campus. To us, Studio B symbolizes our ability to passionately
              collaborate, and design impactful user experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="coming-soon h-fit lg:min-h-screen px-3 lg:px-8 py-12 lg:py-15 flex flex-col gap-3 lg:gap-6 ">
        <img src={team} className=" w-full" alt="logo" />
        <p className="text-asphalt text-[16px] leading-6 lg:leading-10 lg:text-[32px]">
          Currently hard at work constructing our full site,{" "}
          <span className="text-cherry-500">coming very soon!</span>
        </p>
      </div>
      <footer className=" pb-[-2] lg:pt-75 pt-40 gap-12 h-fit lg:min-h-screen px-6 lg:px-8 flex flex-col justify-end bg-[radial-gradient(ellipse_1800px_1000px_at_bottom,#E71936_0%,#16136F_70%,#080736_80%,#0C0C0C_100%)]">
        <div className="flex lg:flex-row flex-col justify-between w-full gap-8 ">
          <div className="flex flex-row flex-nowrap  justify-between gap-3">
            <form className="flex flex-col lg:flex-row flex-nowrap w-full lg:min-w-84 lg:justify-between gap-3 *:rounded-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ex. studiob@fromstudiob.ca"
                className="px-6 py-3 w-full lg:min-w-90 placeholder:text-[16px] text-[16px] placeholder:leading-6 leading-6 lg:placeholder:text-2xl lg:text-2xl placeholder:text-center text-center  lg:placeholder:text-left lg:text-left lg:placeholder:leading-8 lg:leading-8 placeholder:align-middle align-middle placeholder:text-[#ccc8c880] text-nowrap text-virgil outline-1 outline-virgil"
              />
              <input
                type="submit"
                value="Let's Talk!"
                className="px-6 py-3 text-[20px] leading-7 lg:text-[24px] lg:leading-8 text-center bg-[#6c6c6c80] rounded-full w-full lg:w-fit outline-2 text-virgil outline-[#ccc8c84d] cursor-pointer hover:bg-virgil hover:text-coal"
              />
            </form>
          </div>
          <div className="flex flex-row flex-nowrap justify-between gap-3 text-virgil *:lg:text-2xl *:text-4xl *:bg-[#6c6c6c80] *:rounded-full *:w-fit *:text-center *:outline-2 *:outline-[#ccc8c84d] *:p-4 ">
            <a
              className="hover:bg-virgil hover:text-steel"
              href="https://www.linkedin.com/company/from-studio-b/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="eva:email-fill" />
            </a>
            <a
              className="hover:bg-virgil hover:text-steel]"
              href="https://www.instagram.com/fromstudiob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="akar-icons:instagram-fill" />
            </a>
            {/* <a
              className="hover:bg-virgil hover:text-steel"
              href="https://www.x.com/fromstudiob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ant-design:twitter-outlined" />
            </a> */}
            <a
              className="hover:bg-virgil hover:text-steel"
              href="https://www.linkedin.com/company/from-studio-b/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="akar-icons:linkedin-fill" />
            </a>
          </div>
        </div>
        <img
          src={footerLogo}
          className=" mix-blend-soft-light w-full"
          alt="logo"
        />
      </footer>
    </div>
  );
}

export default App;
