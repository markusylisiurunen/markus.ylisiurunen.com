import React from "react";

import Container from "../src/components/Container";
import Divider from "../src/components/Divider";
import Spacer from "../src/components/Spacer";

import Education from "../src/sections/Education";
import Hero from "../src/sections/Hero";
import Introduction from "../src/sections/Introduction";
import Navigation from "../src/sections/Navigation";
import Projects from "../src/sections/Projects";
import Quote from "../src/sections/Quote";
import Skills from "../src/sections/Skills";
import Work from "../src/sections/Work";

export default function Home() {
  return (
    <Container>
      {/* Navigation */}
      <Spacer height="40px" />
      <Navigation />
      <Spacer height="40px" />

      {/* Hero */}
      <Hero />
      <Spacer height="64px" />

      {/* Introduction */}
      <Introduction />
      <Spacer height="96px" />

      {/* Quote */}
      <Quote />
      <Spacer height={["96px", "128px"]} />

      {/* Education */}
      <Divider />
      <Spacer height={["96px", "128px"]} />
      <Education />
      <Spacer height={["96px", "128px"]} />

      {/* Work */}
      <Divider />
      <Spacer height={["96px", "128px"]} />
      <Work />
      <Spacer height={["96px", "128px"]} />

      {/* Skills */}
      <Divider />
      <Spacer height={["96px", "128px"]} />
      <Skills />
      <Spacer height={["96px", "128px"]} />

      {/* Projects */}
      <Divider />
      <Spacer height={["96px", "128px"]} />
      <Projects />
      <Spacer height={["96px", "128px"]} />
    </Container>
  );
}
