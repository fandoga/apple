import { footerLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">{"Find an Apple Store"}</span>{" "}
            or <span className="underline text-blue">{" other retailer "}</span>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 7(594) 239-42-92
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright 2025 Apple Inc. All right reserved
          </p>
          <div className="flex">
            {footerLinks.map((link) => (
              <p className="font-semibold text-gray text-xs" key={link}>
                {link}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
