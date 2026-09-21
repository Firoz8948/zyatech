"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import BlurText from "@/components/BlurText/BlurText";
import GhostFibers from "@/components/GhostFibers/GhostFibers";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      {/* GhostFibers WebGL Effect */}
      <div className={styles.ghostFibersBg}>
        <GhostFibers
          lineColor="#140E35"
          glowColor="#3437A0"
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          dpr={1}
          lightMode={false}
          fps={60}
          paused={false}
        />
      </div>

      {/* Animated Background */}
      <div className={styles.bgOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
        <div className={`${styles.orb} ${styles.orb3}`}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className={styles.gridPattern}></div>

      <div className={`container ${styles.heroContent}`}>


        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            <Image
              src="/zyatech-logo.svg"
              alt="Zyatech"
              width={400}
              height={100}
              className={styles.heroLogo}
              priority
            />
          </span>
          <span className={styles.titleLine}>
            <BlurText text="Private Limited" delay={150} animateBy="words" direction="bottom" />
          </span>
        </h1>

        <p className={styles.subtitle}>
          Innovative technology solutions crafted to simplify everyday life.
          We build digital products that make a real difference.
        </p>

        <div className={styles.actions}>
          <a href="#about" className={styles.btnPrimary}>
            Discover More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statLabel}>Products</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>9+</span>
            <span className={styles.statLabel}>Clients</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2026</span>
            <span className={styles.statLabel}>Founded</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>India</span>
            <span className={styles.statLabel}>Based In</span>
          </div>
        </div>
      </div>

    </section>
  );
}
