import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function AboutSection() {
  return (
    <section className="h-dvh lg:flex lg:max-w-screen-lg lg:mx-auto lg:pt-48">
      <div className="lg:w-8/12">
        <h2 className="main-heading lg:text-7xl lg:mb-14">
          A little bit
          <br /> about me
        </h2>
        <p className="lg:mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          quis, aspernatur dignissimos impedit fugiat, id nisi quod tempora
          consequatur placeat dolores tenetur quaerat labore perferendis nobis
          aut corporis obcaecati dolorem!
        </p>
        <p className="lg:mb-8">
          Unde, necessitatibus excepturi? Ex natus vitae dolorem aperiam, cumque
          saepe consequatur, iste dolor libero quidem optio placeat deserunt
          quis earum dolore repellat labore delectus eligendi illum excepturi
          reprehenderit voluptate itaque.
        </p>
        <p className="lg:mb-10">
          Similique ratione veniam eaque hic cumque, distinctio corporis
          repudiandae est quisquam! Perferendis nisi ut recusandae dicta quod
          nobis corporis enim consectetur.
        </p>
        <div className="lg:flex">
          <article className="lg:w-40 lg:mr-10">
            <h3 className="lg:font-black mb-2">Work Experience</h3>
            <ul role="list">
              <li>Front-end Developer at Anvil 2023.01-2024.02</li>
              <li>Merchandising Representative </li>
              <li>Research Assistant</li>
            </ul>
          </article>
          <article className="lg:w-40">
            <h3 className="lg:font-black mb-2">Dev Stack</h3>
            <ul role="list">
              <li>React</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>React-query</li>
              <li>Node.js/Nest.js</li>
              <li>mssql</li>
            </ul>
          </article>
          <article className="lg:w-40">
            <h3 className="lg:font-black mb-2">Featured On</h3>
            <ul role="list">
              <li>blogpost 01</li>
              <li>blogpost 02</li>
              <li>blogpost 03</li>
            </ul>
          </article>
        </div>
      </div>
      <StaticImage
        src="./../images/profile-image.png"
        alt="Profile Image"
        className="rounded-lg lg:w-56 lg:h-56 lg:mx-auto"
      />
    </section>
  );
}
