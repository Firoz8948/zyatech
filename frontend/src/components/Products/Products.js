"use client";

import { useEffect, useRef } from "react";
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
          <h2 className={`${styles.heading} ${styles.animateIn}`}>
            What We&apos;re <span className="gradient-text">Building</span>
          </h2>
          <p className={`${styles.subheading} ${styles.animateIn}`}>
            Discover the products we are building to transform everyday experiences.
          </p>
        </div>

        <div className={`${styles.productCard} ${styles.animateIn}`}>
          <div className={styles.productVisual}>
            <div className={styles.appIcon}>
              <span className={styles.appEmoji}>🍽️</span>
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
              A food delivery and local restaurant discovery platform designed for
              the people of Lalganj and nearby areas. Connecting hungry customers
              with the best local food joints, making ordering easy, fast, and
              delightful.
            </p>
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

        <div className={`${styles.comingSoon} ${styles.animateIn}`}>
          <p>More products coming soon. Stay tuned!</p>
        </div>
      </div>
    </section>
  );
}
