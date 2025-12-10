"use client";

import dynamic from "next/dynamic";
import React from "react";

const Model = dynamic(
  () => import("@/components/Model").then((mod) => mod.default),
  { ssr: false }
);

const ClientWrapper = () => {
  return <Model />;
};

export default ClientWrapper;
