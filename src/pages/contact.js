import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Sidebar from "../components/common/Sidebar";
import Contact from "../components/contact/Contact";
import Layout from "../components/layout/Layout";

function ContactPage() {
  return (
    <Layout>
      <Sidebar />
      <Breadcrumb pageName="Contact Me" pageTitle="Contact Me" />
      <Contact />
    </Layout>
  );
}

export default ContactPage;
