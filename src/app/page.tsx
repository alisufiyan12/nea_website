import About from "@/components/About";
import About1 from "@/components/About1";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Uzairmsg from "@/components/Uzairmsg";
//import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Engineering Alliance - NEA",
  description: "Vote for NEA, Save Pakistan Engineering",
};

export default function Home() {
  //const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      <About />
      <About1 />
      <Uzairmsg />
      <Team />
       {/* <Pricing /> 
      <Testimonials />
     {/* <Faq /> */}
      <CallToAction />
      { /* <HomeBlogSection posts={posts} />  */}
      <Contact />
      <Clients />
    </main>
  );
}