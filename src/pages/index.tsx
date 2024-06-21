import * as React from "react";
import { Layout } from "../components";
import { About, Contact, Hero, Project } from "../containers";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Project />
      <Contact />
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
