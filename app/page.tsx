import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import UseCases from "@/components/UseCases";
import Skills from "@/components/Skills";
import QuickStart from "@/components/QuickStart";
import Tips from "@/components/Tips";
import LearningPath from "@/components/LearningPath";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <UseCases />
        <Skills />
        <QuickStart />
        <Tips />
        <LearningPath />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
