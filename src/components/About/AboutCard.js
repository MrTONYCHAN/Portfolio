import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Chandan Kumar </span>
            from <span className="green"> New Delhi , India.</span>
            <br /> currently working with Cargo Flash Infotech as a Machine Learning Engineer. I am a Computer Science and Information Technology Engineering Student of 2021 Batch. I specialize in Deep Learning, Data analytics, Computer Vision and Machine Learning. I have been working with
            Python for the past 2 years and also have relevant experience in C++, Web development, GitHub and SQL.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games & Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "It takes a touch of genius -- and a lot of courage -- to move in the opposite direction!"{" "}
          </p>
          <footer className="blockquote-footer">Chandan Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
