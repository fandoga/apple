import { rightImg, watchImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      duration: 1,
      stagger: 0.25,
      y: 1,
    });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-zinc z-5">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end md:flex justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-warp items-end gap-5">
            <p className="link">
              Watch the film
              <Image
                className="ml-2"
                src={watchImg}
                alt="watch"
                width={15}
                height={15}
              />
            </p>
            <p className="link">
              Watch the event
              <Image
                className="ml-2"
                src={rightImg}
                alt="watch"
                width={8}
                height={8}
              />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
