import { useEffect } from "react";
import About1 from "../components/about/About1";
import BlogSection1 from "../components/blog/BlogSection1";
import Collection1 from "../components/collection/Collection1";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Banner1 from "../components/banner/Banner1";
import Roadmap from "../components/roadmap/Roadmap";
import Testimonial1 from "../components/testimonial/Testimonial1";
import TrandingCollection1 from "../components/tranding-collection/TrandingCollection1";
import WhyChoose1 from "../components/why-choose/WhyChoose1";
import Head from "next/head";
import Roadmap2 from "../components/roadmap/Roadmap2";
import Roadmap3 from "../components/roadmap/Roadmap3";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <>
      <Head>
        <title>Re:Wired AI</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="The AI-powered solution for community building - Re:Wired" />
        <link
          rel="icon"
          href="assets/images/icons/logo-icon.svg"
          type="image/gif"
          sizes="20x20"
        />
      </Head>
      <Header />
      <Sidebar />
      <Banner1 />
      <About1 padding="pb-120 pt-120" />
      <Collection1 />
      <WhyChoose1 />
      <TrandingCollection1 />
      <Roadmap3 />
      <Testimonial1 />
      <BlogSection1 />
      <Footer />
    </>
  );
}
