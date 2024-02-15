import React from "react";
import { blog } from "./BlogData"; 

export default function Blog() {

  return (
    <>
      <section className=" blog">
        <div className="blogPage">
          <h1>Our Blog & Articles</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="gridBlog container">
          {blog.map((item, index) => (
            <div key={index}>
              <div className="card h-100" data-aos="fade-left" data-aos-duration="500">
                <img src={item.img} className="card-img-top" alt="bloguimg" />
                <div className="card-body">
                  <p className="card-blog">{item.date}</p>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
