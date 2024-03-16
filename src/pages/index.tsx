import * as React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function IndexPage() {
  return (
    <Layout>
      <HeroSection />
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
