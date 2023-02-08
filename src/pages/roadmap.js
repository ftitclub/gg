import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Testimonial1 from "../components/testimonial/Testimonial1";
import Feature1 from "../components/feature/Feature1";
import BlogSection1 from "../components/blog/BlogSection1";
import Roadmap2 from "../components/roadmap/Roadmap2";

export default function RoadmapPage() {
  return (
    <Layout>
      <Breadcrumb pageTitle="Roadmap" pageName="Roadmap" />
      <Roadmap2 />
      <Testimonial1 />
      <Feature1 />
      <BlogSection1 />
    </Layout>
  );
}
