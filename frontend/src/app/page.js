import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Products from "@/components/Products/Products";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
