import * as React from "react";
import CommonSection from "../CommonSection";

export default function ContactSection() {
  return (
    <CommonSection>
      <div>
        <h2>Get In Touch</h2>
      </div>
      <form>
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Your Email</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea name="content" id=""></textarea>
      </form>
    </CommonSection>
  );
}
