import React from "react";
import Card from "../components/Card";

const Contact = () => {
  return (
    <div>
      <div className="h1 d-flex justify-content-center">
        <h1>CONTACT US</h1>
      </div>
      <div className="container-card">
        <Card
          imgSrc="./image/Ndaru.JPG"
          title="Ndaru Windra Sayidinaa"
          description="Aku Ingin Pindah Ke MEIKARTA"
          btnUrl="#"
          btnText="Go Somewhere"
        />
      </div>
    </div>
  );
};

export default Contact;
