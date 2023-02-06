import React from "react";
import "../About.css";
const AboutPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px 0",
      }}
    >
      <div></div>
      <div style={{ width: "70%", textAlign: "center" }}>
        <p className="p">
          Many people in the world of woodworking are often asked, “ How did you
          get started?” Did somebody inspire you, was it happenstance?, etc. I
          knew from about age 16, when I spent summer workweeks 100 miles from
          home on a concrete crew, that I would be doing some kind of
          construction work my whole life. I was fortunate to work for some
          amazing guys in Colorado who laid the foundation for my “way”, my
          path, my methods, and my style. When I began the formal business of
          TCW in 1993, customer satisfaction and a high level of workmanship
          were the same then as now—paramount! I will let my picture gallery
          speak for itself, it covers a wide range of categories, price points,
          and styles of residential and commercial projects that any clientwould
          be delighted to see in their home or business!
        </p>
        
        <p className="p" style={{ fontSize: "1.2em", lineHeight: "1.5em" }}>
          The Craftsman Way provides full-service interior/exterior finish
          carpentry and custom furniture using materials from all over the
          world, including, but not limited to, domestic and exotics, and
          reclaimed, recycled, and barn wood(80 to 150 yrs old, from the
          midwest). Over 35 years experience in residential and commercial
          construction.
        </p>

            <br/>
            <br/>
            <br/>

            <h2>Services Available But Not Limited To:</h2>
        <ul
          style={{
            listStyleType: "none",
            fontSize: "1.2em",
            marginTop: "20px",
          }}
        >
          <li>Crown Molding Installation</li>
          <li>Custom Bathroom Vanities</li>
          <li>Custom Bookcases</li>
          <li>Custom Built-ins</li>
          <li>Custom Entertainment Centers</li>
          <li>Custom Fireplace Mantels</li>
          <li>Custom Furniture</li>
          <li>Custom Home Bars</li>
          <li>Custom Pantries</li>
          <li>Custom Shelving</li>
          <li>Finish Carpentry</li>
        </ul>

      </div>
    </div>
  );
};

export default AboutPage;
