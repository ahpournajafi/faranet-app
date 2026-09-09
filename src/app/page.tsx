import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { SupportContract } from "@/sections/SupportContract";
import { WhyUs } from "@/sections/WhyUs";
import { Process } from "@/sections/Process";
import { About } from "@/sections/About";
import { Consultation } from "@/sections/Consultation";
import { FAQ } from "@/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <SupportContract />
        <WhyUs />
        <Process />
        <About />
        <Consultation />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
