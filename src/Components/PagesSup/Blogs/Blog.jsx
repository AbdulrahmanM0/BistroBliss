import React from "react";
import "./Blog.css";
import blog1 from "../../../assets/Images/blogs/blog1.png";
// import blog2 from "../../../assets/Images/blogs/blog2.png";
import blog3 from "../../../assets/Images/blogs/blog3.png";
import blog4 from "../../../assets/Images/blogs/blog4.png";
import blog5 from "../../../assets/Images/blogs/blog5.png";
import blog6 from "../../../assets/Images/blogs/blog6.png";
import blog7 from "../../../assets/Images/blogs/blog7.png";
import blog8 from "../../../assets/Images/blogs/blog8.png";
import blog9 from "../../../assets/Images/blogs/blog9.png";
import blog10 from "../../../assets/Images/blogs/blog10.png";
import blog11 from "../../../assets/Images/blogs/blog11.png";
import blog12 from "../../../assets/Images/blogs/blog12.png";
export default function Blog() {
  const blog = [
    {
      img: blog1,
      date: " January 3, 2023 ",
      paragraph: "How to prepare a delicious gluten free sushi.",
    },
    {
      img: blog6,
      date: " January 3, 2023 ",
      paragraph: "How to prepare the perfect fries in an air fryer.",
    },
    {
      img: blog3,
      date: " January 3, 2023 ",
      paragraph: "Exclusive baking lessons from the pastry king.",
    },
    {
      img: blog4,
      date: " January 3, 2023 ",
      paragraph: "How to prepare delicious chicken tenders.",
    },
    {
      img: blog5,
      date: " January 3, 2023 ",
      paragraph: "5 great cooking gadgets you can buy to save time.",
    },
    {
      img: blog6,
      date: " January 3, 2023 ",
      paragraph: "The secret tips & tricks to prepare a perfect burger.",
    },
    {
      img: blog7,
      date: " January 3, 2023 ",
      paragraph: "7 delicious cheesecake recipes you can prepare.",
    },
    {
      img: blog8,
      date: " January 3, 2023 ",
      paragraph: "5 great pizza restaurants you should visit this city.",
    },
    {
      img: blog9,
      date: " January 3, 2023 ",
      paragraph: "5 great cooking gadgets you can buy to save time.",
    },
    {
      img: blog10,
      date: " January 3, 2023 ",
      paragraph: "How to prepare a delicious gluten free sushi.",
    },
    {
      img: blog11,
      date: " January 3, 2023 ",
      paragraph: "Top 20 simple and quick desserts for kids.",
    },
    {
      img: blog12,
      date: " January 3, 2023 ",
      paragraph: "Top 20 simple and quick desserts for kids.",
    },
  ];
  return (
    <>
      <section className=" blog">
        <div className="blog_content">
          <h1>Our Blog & Articles</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="bloggrid container">
          {blog.map((item, index) => (
            <div className="itemgrid" key={index}>
              <div className="card h-100">
                <img src={item.img} className="card-img-top" alt="bloguimg" />
                <div className="card-body">
                  <p className="card-date-blog">{item.date}</p>
                  <p className="card-text-blog">{item.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
