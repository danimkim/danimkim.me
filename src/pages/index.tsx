import * as React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/Hero";
import AboutSection from "../components/About";
import ProjectSection from "../components/Project";
import ContactSection from "../components/Contact/ContactSection";

export default function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <title>Tina Kim</title>
      <meta
        name="description"
        content={"This is a personal website of Tina Kim."}
      />
    </>
  );
}
