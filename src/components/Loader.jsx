"use client";

import { blurPhone } from "@/utils";
import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Loader = () => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  setTimeout(() => {
    setIsReady(true);
  }, 500);

  useGSAP(() => {
    if (isReady) {
      const tl = gsap.timeline();

      tl.to(
        containerRef.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        0
      );

      tl.to(
        progressRef.current,
        {
          width: "100%",
          duration: 3,
          ease: "power1.out",
        },
        0.5
      );
    }
  }, [isReady]);

  return (
    <Html>
      <div style={{ width: 450, height: 450 }}>
        <div className="relative top-[-65%] left-[-50%] overflow-hidden flex justify-center items-center">
          <Image
            className="object-cover object-center"
            src={blurPhone}
            alt="blurred"
            width={450}
            height={450}
          />
          <span
            ref={containerRef}
            className="absolute top-[50%] left-[37%] w-26 h-3 overflow-hidden rounded-full bg-gray"
          >
            <span
              ref={progressRef}
              className="h-full w-0 bg-white block origin-left"
            ></span>
          </span>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
