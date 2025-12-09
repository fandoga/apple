import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "@/utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo);

  useEffect(() => {
    const computeSrc = () =>
      window.matchMedia("(max-width: 760px)").matches
        ? smallHeroVideo
        : heroVideo;

    const handleResize = () => setVideoSrc(computeSrc());
    handleResize(); // set once after mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2.3,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: 30,
      delay: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-7/8 w-full h-full flex-center flex-col">
        <p id="hero" className="hero-title">
          IPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-80"
        >
          <a className="btn" href="#highlights">
            Buy
          </a>
          <p className="text-xl font-normal">From 999$ or 199$/months</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
