import Link from "next/link";
import React from "react";
import blogGirdData from "../../data/blog_grid_data.json";

export default function Blog2() {
  return (
    <div className="blog-section bg-color2 pb-120">
      <div className="container">
        <div className="row mb-70">
          <div className="section-title3 text-center">
            <h2>
              <img
                src="assets/images/icons/section-title-dot.svg"
                alt="image"
              />
              Latest Post
            </h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {blogGirdData.slice(0, 3).map((data) => {
            const { id, image, date, title } = data;
            return (
              <div key={id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog-single2">
                  <div className="blog-image">
                    <img src={image} className=" img-fluid" alt="image" />
                  </div>
                  <div className="blog-content">
                    <span className="date">{date}</span>
                    <h4>
                      <Link href="/blog-details">
                        <a>{title}</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
