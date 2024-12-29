import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";
import { TechStack } from "@/components/TechStack";

export const metadata: Metadata = {
  title: "About | Sheikh",
  description: "",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
      <TechStack />
    </Container>
  );
}
