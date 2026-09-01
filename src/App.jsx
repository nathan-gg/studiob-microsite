// import logo from "./logo.svg";
import footerLogo from "./assets/footer-logo.svg";
import headerLogo from "./assets/header-logo.svg";
import asterisk from "./assets/asterisk.svg";
import filler from "./assets/filler.png";
import bankmentFiller from "./assets/bankment-filler.png";
import RBCFiller from "./assets/rbc-filler.png";
import team from "./assets/team.png";
import GBLanding from "./assets/green-basil-landing.png";
import "./App.css";

import DigitalClock from "./DigitalClock";

function App() {
  return (
    <div className="min-h-screen bg-virgil font-medium  tracking-tight text-coal ">
      <header className="App-header sticky top-0 flex h-16 py-3 px-60 justify-between items-center ">
        <a className="App-link  h-7" href="/" rel="noopener noreferrer">
          <img src={headerLogo} className="h-7" alt="logo" />
        </a>
        <div className=" text-2xl leading-8 h-fit flex flex-row gap-2">
          <p classname="">Vancouver, BC</p>
          <img src={asterisk} className=" w-2" alt="logo" />
          <DigitalClock/>
        </div>
      </header>
      <div className="showreel h-[calc(100vh-64px)] px-60 py-15">
        <img src={filler} className=" w-full" alt="logo" />
      </div>
      <div className="mission min-h-screen py-15 px-60 text-5xl [&_p]:uppercase">
        <p>We are a design agency comprised of </p>
        <p>
          <span className="bg-[linear-gradient(90deg,#FF9FA9_0%,#E71936_37%,#260371_100%)] bg-clip-text text-transparent">
            5 designers,
          </span>{" "}
          whose work with{" "}
          <span className="bg-[linear-gradient(90deg,#B3D499_0%,#48CB71_51%,#37734B_100%)] bg-clip-text text-transparent">
            industry leaders
          </span>{" "}
          spans{" "}
          <span className="bg-[linear-gradient(90deg,#FFE692_0%,#FFC972_0%,#FF791A_29%,#CF4302_100%)] bg-clip-text text-transparent">
            UX/UI, brand and digital.
          </span>
        </p>
        <br></br>
        <p>With every project we bring</p>
        <p className="text-cherry-bold">bespoke solutions</p>
        <p className="text-cherry-bold">bold approaches</p>
        <p className="text-cherry-bold">bona-fide communication</p>
        <p className="text-cherry-bold">& boundless growth.</p>
        <br></br>
        <p>We are Studio B.</p>
      </div>
      <div className="projects min-h-screen py-15 px-60 flex-col flex gap-6">
        <div className="flex flex-col w-full gap-2">
          <img src={RBCFiller} className=" w-full rounded-xl" alt="logo" />
          <p className="text-xl">
            Creating a brand new banking experience for RBC customers
          </p>
        </div>
        <div className="flex flex-row w-full gap-6">
          <div className="flex flex-col w-full gap-2">
            <img
              src={bankmentFiller}
              className=" w-full rounded-xl"
              alt="logo"
            />
            <p className="text-xl">Bringing in the New Year with BANKMENT</p>
          </div>
          <div className="flex flex-col w-full gap-2">
            <img src={GBLanding} className=" w-full rounded-xl" alt="logo" />
            <p className="text-xl">
              Revitalizing Green Basil Restaurant’s Web Identity
            </p>
          </div>
        </div>
      </div>
      <div className="about min-h-screen px-60 py-15 ">
        <img src={team} className=" w-full" alt="logo" />
      </div>
      <footer className="about pb-[-2] h-fit pt-15 gap-6 bg-[linear-gradient(#FFFAFA_0%,#FF9FA9_34%,#E71936_73%,#A10037_100%)] flex flex-col justify-end items-center">
        <div className="flex flex-col gap-3 w-fit">
          <div className="flex flex-row flex-nowrap  justify-between gap-3">
            <form className="flex flex-row flex-nowrap justify-between gap-3">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Sign up to learn more"
                className="p-2 pl-3 w-full  text-nowrap bg-steam rounded outline-none"
              />
              <input
                type="submit"
                value="Submit"
                className="p-2 text-center bg-steam rounded cursor-pointer"
              />
            </form>
          </div>
          <div className="flex flex-row flex-nowrap justify-between gap-3 text-cherry-500 *:outline-1 *:outline-cherry-500 ">
            <a
              className="p-2 w-full text-center   rounded"
              href="https://www.instagram.com/fromstudiob"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            {/* <a
              className="p-2 w-full text-center  rounded"
              href="https://www.instagram.com/fromstudiob"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a> */}
            <a
              className="p-2 w-full text-center  rounded"
              href="https://www.linkedin.com/company/from-studio-b/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
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
