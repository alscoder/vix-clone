import Image from "next/image";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Templates from "./components/Templates";
import MoreThanWebsite from "./components/MoreThanWebsite";
import Travel from "./components/Travel";
import WebBuilder from "./components/WebBuilder";
import Business from "./components/Business";
import Traffic from "./components/Traffic";
import Manage from "./components/Manage";
import CreateWebsite from "./components/CreateWebsite";
import GetInspired from "./components/GetInspired";
import WhyWix from "./components/WhyWix";
import HereForYou from "./components/HereForYou";
import Accordion from "./components/Accordion";
import Success from "./components/Success";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Platform />
      <Templates />
      <MoreThanWebsite />
      <Travel />
      <WebBuilder />
      <Business />
      <Traffic />
      <Manage />
      <CreateWebsite />
      <GetInspired />
      <WhyWix />
      <HereForYou />
      <Accordion />
      <Success />
    </main>
  );
}
