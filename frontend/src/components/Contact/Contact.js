"use client";

import { useEffect, useRef } from "react";
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
          <h2 className={`${styles.heading} ${styles.animateIn}`}>
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className={`${styles.subheading} ${styles.animateIn}`}>
            Have a question or want to work with us? We&apos;d love to hear from you.
          </p>
        </div>

        <div className={styles.cards}>
          <a
            href="mailto:zyatechpvtltd@gmail.com"
            className={`${styles.contactCard} ${styles.animateIn}`}
          >
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Email Us</h3>
            <p className={styles.cardValue}>zyatechpvtltd@gmail.com</p>
            <span className={styles.cardAction}>
              Send an email
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </span>
          </a>

          <div className={`${styles.contactCard} ${styles.animateIn}`}>
            <div className={`${styles.cardIcon} ${styles.iconPurple}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Our Location</h3>
            <p className={styles.cardValue}>Lalganj, Uttar Pradesh, India</p>
            <span className={styles.cardHint}>Zyatech Private Limited</span>
          </div>

          <div className={`${styles.contactCard} ${styles.animateIn}`}>
            <div className={`${styles.cardIcon} ${styles.iconGreen}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Business</h3>
            <p className={styles.cardValue}>Private Limited Company</p>
            <span className={styles.cardHint}>Registered in India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
