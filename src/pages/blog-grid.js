import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import CustomPagination from "../components/pagination/CustomPagination";
import blogGirdData from "../data/blog_grid_data.json";
export default function BlogGirdPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Blog Grid" pageTitle="Blog Grid" />
        <div className="blog-section bg-color2 pbb-120 pb-120">
          <div className="container">
            <div className="row g-4 justify-content-center">
              {blogGirdData.map((element) => {
                const { id, image, title, date } = element;
                return (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={id}>
                    <div className="blog-single2">
                      <div className="blog-image">
                        <img src={image} className=" img-fluid" alt="image" />
                      </div>
                      <div className="blog-content">
                        <span className="date">{date}</span>
                        <h4>
                          <Link
                            href="/blog-details"
                            data-cursor="View<br>Details"
                          >
                            <a>{title}</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row pt-80">
              <div className="col-lg-12">
                <CustomPagination />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
