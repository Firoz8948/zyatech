import Link from "next/link";
import styles from "./PrivacyPolicy.module.css";

export const metadata = {
  title: "Privacy Policy | Zyatech Private Limited",
  description:
    "Privacy Policy for Zyatech Private Limited and its products including LalganjEats.",
};

export default function PrivacyPolicyPage() {
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
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: September 2026</p>
        </div>

        <article className={styles.article}>
          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Zyatech Private Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting the privacy of our users. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use
              our products and services, including LalganjEats.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone
                number, delivery address, and payment information.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with
                our applications, including device type, operating system, and app
                usage patterns.
              </li>
              <li>
                <strong>Location Data:</strong> With your permission, we may collect
                your geographic location to provide location-based services.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send service-related notifications</li>
              <li>Respond to customer support inquiries</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Ensure the security of our platform</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your data with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Restaurant partners (for order fulfillment)</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us
              at:
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
