import Link from "next/link";
import styles from "./Terms.module.css";

export const metadata = {
  title: "Terms of Service | Zyatech Private Limited",
  description:
    "Terms of Service for Zyatech Private Limited and its products including LalganjEats.",
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>Z</span>
            <span className={styles.logoText}>Zyatech</span>
          </Link>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className={`container ${styles.content}`}>
        <div className={styles.header}>
          <span className={styles.label}>Legal</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: September 2026</p>
        </div>

        <article className={styles.article}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using any services provided by Zyatech Private Limited
              (&quot;Zyatech,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), including LalganjEats, you agree
              to be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Description of Services</h2>
            <p>
              Zyatech provides digital products and technology services, including
              but not limited to:
            </p>
            <ul>
              <li>LalganjEats — a food delivery and restaurant discovery platform</li>
              <li>Other digital services as introduced from time to time</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate and
              complete information. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose</li>
              <li>Interfere with or disrupt the services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated means to access our services without permission</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property displayed on
              our platforms are owned by Zyatech Private Limited. You may not
              reproduce, distribute, or create derivative works without our express
              written consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Zyatech Private Limited shall
              not be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We
              will notify users of significant changes through our applications or
              by email. Continued use of our services after changes constitutes
              acceptance of the modified terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the
              laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of the courts in Uttar Pradesh, India.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Contact Us</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:zyatechpvtltd@gmail.com">zyatechpvtltd@gmail.com</a>
            </p>
            <p>
              <strong>Company:</strong> Zyatech Private Limited
            </p>
            <p>
              <strong>Location:</strong> Lalganj, Uttar Pradesh, India
            </p>
          </section>
        </article>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Zyatech Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
