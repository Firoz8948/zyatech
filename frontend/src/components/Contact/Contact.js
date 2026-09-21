"use client";

import { useEffect, useRef } from "react";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import BlurText from "@/components/BlurText/BlurText";
import styles from "./Contact.module.css";

export default function Contact() {
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
    <section className={styles.contact} id="contact" ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={`${styles.label} ${styles.animateIn}`}>Contact</span>
          <h2 className={styles.heading}>
            <BlurText text="Get in Touch" delay={150} animateBy="words" direction="top" />
          </h2>
          <p className={`${styles.subheading} ${styles.animateIn}`}>
            Have a question or want to work with us? We&apos;d love to hear from you.
          </p>
        </div>

        <div className={styles.cards}>
          <SpotlightCard className={`${styles.contactCard} ${styles.animateIn}`} spotlightColor="rgba(0, 212, 255, 0.2)">
            <a href="mailto:zyatechpvt@gmail.com" className={styles.contactCardLink}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Email Us</h3>
              <p className={styles.cardValue}>zyatechpvt@gmail.com</p>
              <span className={styles.cardAction}>
                Send an email
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </span>
            </a>
          </SpotlightCard>

          <SpotlightCard className={`${styles.contactCard} ${styles.animateIn}`} spotlightColor="rgba(59, 130, 246, 0.2)">
            <a href="tel:+919129362763" className={styles.contactCardLink}>
              <div className={`${styles.cardIcon} ${styles.iconBlue}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Call Us</h3>
              <p className={styles.cardValue}>+91 9129362763</p>
              <span className={styles.cardAction}>
                Make a call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </span>
            </a>
          </SpotlightCard>

          <SpotlightCard className={`${styles.contactCard} ${styles.animateIn}`} spotlightColor="rgba(139, 92, 246, 0.2)">
            <div className={`${styles.cardIcon} ${styles.iconPurple}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Our Location</h3>
            <p className={styles.cardValue}>Lalganj Ajhara, Uttar Pradesh, India</p>
            <span className={styles.cardHint}>Zyatech Private Limited</span>
          </SpotlightCard>

          <SpotlightCard className={`${styles.contactCard} ${styles.animateIn}`} spotlightColor="rgba(16, 185, 129, 0.2)">
            <div className={`${styles.cardIcon} ${styles.iconGreen}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Business</h3>
            <p className={styles.cardValue}>Private Limited Company</p>
            <span className={styles.cardHint}>Registered in India</span>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
