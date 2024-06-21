import * as React from "react";
import Container from "./../../components/Container";

export default function Contact() {
  return (
    <Container>
      <div className="lg:mt-1/3">
        <h2 className="lg:text-8xl">Get In Touch</h2>
      </div>
      <form className="border border-black lg:w-full">
        <div className="lg:flex lg:flex-col">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            className="border border-slate-400 lg:h-8 focus:outline-none focus:border-black"
          />
        </div>
        <div className="lg:flex lg:flex-col">
          <label htmlFor="">Your Email</label>
          <input
            type="text"
            className="border border-slate-400 lg:h-8 focus:outline-none focus:border-black"
          />
        </div>
        <div className="lg:flex lg:flex-col">
          <label htmlFor="">Message</label>
          <textarea
            name="content"
            id=""
            placeholder="메세지를 입력해주세요"
            className="border border-slate-400 lg:h-72 focus:outline-none focus:border-black"
          ></textarea>
        </div>
      </form>
    </Container>
  );
}
