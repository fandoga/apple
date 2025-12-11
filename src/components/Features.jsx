import { explore1Img, explore2Img, exploreVideo } from "@/utils";
import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-20% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 5.5,
      }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power1.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-36 pl-24">
            <h2 className="text-6xl lg:text-8xl font-semibold">iPhone.</h2>
            <h2 className="text-6xl lg:text-8xl font-semibold md:max-w-fit sm:max-w-sm">
              Forged in Titanium.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vw] w-full flex flex-1 pb-4 items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full max-h-[50vh] object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    className="feature-video g_grow"
                    src={explore1Img}
                    alt="titanium1"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    className="feature-video g_grow"
                    src={explore2Img}
                    alt="titanium2"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    <span>
                      {
                        " using the same alloy that spacecrafts use for missions to Mars."
                      }
                    </span>
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weigth ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    <span>
                      {" You'll notice the difference moment you pick one up."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
