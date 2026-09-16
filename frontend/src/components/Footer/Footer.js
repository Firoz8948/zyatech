import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>Z</span>
              <span className={styles.logoText}>Zyatech</span>
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
              href="mailto:zyatechpvtltd@gmail.com"
              className={styles.link}
            >
              zyatechpvtltd@gmail.com
            </a>
            <span className={styles.linkStatic}>Lalganj, UP, India</span>
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
