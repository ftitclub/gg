import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import About1 from "../components/about/About1";
import Feature1 from "../components/feature/Feature1";
import Testimonial1 from "../components/testimonial/Testimonial1";
import BlogSection1 from "../components/blog/BlogSection1";

export default function AboutPage() {
  return (
    <Layout>
      <Breadcrumb pageName="About" pageTitle="About" />
      <About1 padding="pt-120" />
      <Feature1 padding="pb-120" />
      <Testimonial1 />
      <BlogSection1 />
    </Layout>
  );
}
