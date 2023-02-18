import React from "react";
import InputField from "../Component/ContactComponent/InputField";
import Images from "../Component/layout/Images";
import Container from "../Component/layout/Container";
import BreadCrumd from "../Component/shoppagecomponent/BreadCrumd";
import Button from "../Component/ContactComponent/Button";
const Contact = () => {
  return (
    <Container className="mx-auto max-w-container p-5">
      <BreadCrumd />
      <div className="mb-32">
        <h1 className="mt-16 mb-10 font-dmsans text-4xl font-bold text-primary">
          Fill up a Form
        </h1>

        <InputField
          inputType="input"
          type="text"
          placeholder="Enter your Name"
          inputhead="Name"
        />

        <InputField
          inputType="input"
          type="email"
          placeholder="Your Email here"
          inputhead="Email"
        />

        <InputField
          inputType="textarea"
          type=""
          placeholder="Your Message here"
          inputhead="Message"
        />
        <Button buttonName="post" />
      </div>
      <div className="mb-20">
        <Images imgsrc={"../images/contact/Map.png"} />
      </div>
    </Container>
  );
};

export default Contact;
