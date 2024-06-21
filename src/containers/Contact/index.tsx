import * as React from "react";
import { Button, Container } from "./../../components";
import FormInput from "./components/Input";
import { StaticImage } from "gatsby-plugin-image";

export default function Contact() {
  return (
    <Container className="lg:flex lg:items-center">
      <div className="lg:flex lg:w-full lg:justify-center">
        <div className="lg:w-1/3">
          <h2 className="main-heading lg:text-7xl">Get In Touch</h2>
          <ul className="lg:flex lg:mt-5">
            <li>
              <a href="https://www.linkedin.com/in/danim-kim/" target="_blank">
                <StaticImage
                  src={"./../../images/linkedin.svg"}
                  alt="send"
                  width={40}
                />
              </a>
            </li>
            <li className="lg:ml-1">
              <a href="https://github.com/danimkim" target="_blank">
                <StaticImage
                  src={"./../../images/github.svg"}
                  alt="send"
                  width={40}
                />
              </a>
            </li>
          </ul>
        </div>
        <form className="lg:flex-grow lg:max-w-xl lg:ml-10">
          <FormInput label="Name" />
          <FormInput label="Email" className="lg:mt-5" />
          <FormInput label="Message" isMultiLine={true} className="lg:mt-5" />
          <Button type="submit" className="lg:mt-8 lg:w-40 block lg:mx-auto">
            <StaticImage
              src={"./../../images/send.svg"}
              alt="send"
              width={20}
            />
            <span className="lg:ml-3">Send</span>
          </Button>
        </form>
      </div>
    </Container>
  );
}
