import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us",
  description: "Detailed Infromation About Achievements of Every Governing Body Members",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
