"use client";

import { useEffect, useRef } from "react";
import styles from "./About.module.css";

export default function About() {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateIn}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={`${styles.label} ${styles.animateIn}`}>About Us</span>
          <h2 className={`${styles.heading} ${styles.animateIn}`}>
            Driven by <span className="gradient-text">Innovation</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={`${styles.textBlock} ${styles.animateIn}`}>
            <p className={styles.description}>
              <strong>Zyatech Private Limited</strong> is a technology company focused
              on building innovative digital products that simplify and enhance
              everyday life. We believe in leveraging modern technology to solve
              real-world problems and create solutions that people love to use.
            </p>
            <p className={styles.description}>
              From food delivery to digital services, we are committed to
              building platforms that connect people, empower local businesses,
              and drive digital transformation across communities.
            </p>
          </div>

          <div className={styles.values}>
            <div className={`${styles.valueCard} ${styles.animateIn}`}>
              <div className={styles.valueIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Innovation First</h3>
              <p className={styles.valueDesc}>
                We push boundaries and embrace cutting-edge technology to deliver exceptional products.
              </p>
            </div>

            <div className={`${styles.valueCard} ${styles.animateIn}`}>
              <div className={`${styles.valueIcon} ${styles.iconPurple}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Community Focused</h3>
              <p className={styles.valueDesc}>
                Our products are built to serve and uplift local communities across India.
              </p>
            </div>

            <div className={`${styles.valueCard} ${styles.animateIn}`}>
              <div className={`${styles.valueIcon} ${styles.iconGreen}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Quality Driven</h3>
              <p className={styles.valueDesc}>
                We maintain the highest standards in every line of code and every design decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
