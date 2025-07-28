"use client";

import Contact from "@/components/new-lp/contact";
import Ecosystem from "@/components/new-lp/ecosystem";
import Features from "@/components/new-lp/features";
import Hero from "@/components/new-lp/hero";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Ecosystem />
      <Contact />
    </>
  );
}
