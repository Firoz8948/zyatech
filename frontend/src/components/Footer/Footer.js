import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/zyatech-logo.svg"
                alt="Zyatech Logo"
                width={130}
                height={38}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.brandDesc}>
              Innovative technology solutions crafted to simplify everyday life.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Company</h4>
            <a href="#about" className={styles.link}>About</a>
            <a href="#products" className={styles.link}>Products</a>
            <a href="#contact" className={styles.link}>Contact</a>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Legal</h4>
            <Link href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.link}>
              Terms of Service
            </Link>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Contact</h4>
            <a
              href="mailto:zyatechpvt@gmail.com"
              className={styles.link}
            >
              zyatechpvt@gmail.com
            </a>
            <a
              href="tel:+919129362763"
              className={styles.link}
            >
              +91 9129362763
            </a>
            <span className={styles.linkStatic}>Lalganj Ajhara, UP, India</span>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Zyatech Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
