"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import BlurText from "@/components/BlurText/BlurText";
import styles from "./Products.module.css";

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateIn}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.products} id="products" ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={`${styles.label} ${styles.animateIn}`}>Our Products</span>
          <h2 className={styles.heading}>
            <BlurText text="What We're Building" delay={150} animateBy="words" direction="top" />
          </h2>
          <p className={`${styles.subheading} ${styles.animateIn}`}>
            Discover the products we are building to transform everyday experiences.
          </p>
        </div>

        {/* LalganjEats */}
        <div className={`${styles.productCard} ${styles.animateIn}`}>
          <div className={styles.productVisual}>
            <div className={styles.appIcon}>
              <Image
                src="/lalganj icon.png"
                alt="LalganjEats"
                width={80}
                height={80}
                className={styles.appIconImage}
              />
            </div>
            <div className={styles.glowRing}></div>
          </div>

          <div className={styles.productInfo}>
            <div className={styles.productBadge}>
              <span className={styles.liveDot}></span>
              Live on Play Store
            </div>
            <h3 className={styles.productName}>LalganjEats</h3>
            <p className={styles.productDesc}>
              Lalganj&apos;s first-ever food delivery app — built for the people of
              Lalganj Ajhara, Pratapgarh, Uttar Pradesh and nearby areas. A food
              delivery and local restaurant discovery platform that connects hungry
              customers with the best local food joints. Order your favourite meals
              from nearby restaurants with ease, speed, and delight — all from your
              phone.
            </p>
            <div className={styles.productMeta}>
              <a href="https://lalganjeats.com" target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                🌐 lalganjeats.com
              </a>
              <span className={styles.productOwner}>Owned by Zyatech Private Limited</span>
            </div>
            <div className={styles.productFeatures}>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Local Restaurant Discovery
              </div>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Easy Online Ordering
              </div>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Fast Delivery
              </div>
            </div>
          </div>
        </div>

        {/* Fagson */}
        <div className={`${styles.productCard} ${styles.cardFagson} ${styles.animateIn}`}>
          <div className={styles.productVisual}>
            <div className={styles.appIcon}>
              <span className={styles.appEmoji}>🚀</span>
            </div>
            <div className={`${styles.glowRing} ${styles.glowPurple}`}></div>
          </div>

          <div className={styles.productInfo}>
            <div className={`${styles.productBadge} ${styles.badgeUpcoming}`}>
              <span className={styles.upcomingDot}></span>
              Coming Soon
            </div>
            <h3 className={styles.productName}>Fagson</h3>
            <p className={styles.productDesc}>
              A multi-tenant food delivery platform built to scale across cities
              and towns. Fagson empowers local businesses by providing a white-label
              food delivery solution — bringing the convenience of modern food
              ordering to communities everywhere. Owned by Zyatech Private Limited.
            </p>
            <div className={styles.productFeatures}>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Multi-Tenant Architecture
              </div>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                White-Label Solution
              </div>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Multi-City Expansion
              </div>
            </div>
            <div className={styles.launchLocations}>
              <span className={styles.launchLabel}>Launching soon in:</span>
              <div className={styles.locationTags}>
                <span className={styles.locationTag}>Salon</span>
                <span className={styles.locationTag}>Kunda</span>
                <span className={styles.locationTag}>Uttarakhand</span>
                <span className={styles.locationTag}>Rajasthan</span>
                <span className={styles.locationTag}>& more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
