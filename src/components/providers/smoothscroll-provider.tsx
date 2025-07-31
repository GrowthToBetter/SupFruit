"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [isClient, setIsClient] = useState(false);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient]);

  return (
    <div id="smooth-wrapper" className="cursor-default">
      <div id="smooth-content">
        {pathname !== "/" && <div className="mb-24" />}
        {children}
      </div>
    </div>
  );
}
