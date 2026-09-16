"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>Z</span>
          <span className={styles.logoText}>Zyatech</span>
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <a
            href="#home"
            className={styles.navLink}
            onClick={(e) => handleNavClick(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={styles.navLink}
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
          </a>
          <a
            href="#products"
            className={styles.navLink}
            onClick={(e) => handleNavClick(e, "products")}
          >
            Products
          </a>
          <a
            href="#contact"
            className={styles.navLink}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
          <div className={styles.navLinksMobile}>
            <Link href="/privacy-policy" className={styles.navLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.navLink}>
              Terms
            </Link>
          </div>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="nav-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
