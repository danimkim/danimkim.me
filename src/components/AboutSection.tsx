import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function AboutSection() {
  return (
    <section>
      <div>
        <h2>A little bit about me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          quis, aspernatur dignissimos impedit fugiat, id nisi quod tempora
          consequatur placeat dolores tenetur quaerat labore perferendis nobis
          aut corporis obcaecati dolorem!
        </p>
        <p>
          Unde, necessitatibus excepturi? Ex natus vitae dolorem aperiam, cumque
          saepe consequatur, iste dolor libero quidem optio placeat deserunt
          quis earum dolore repellat labore delectus eligendi illum excepturi
          reprehenderit voluptate itaque.
        </p>
        <p>
          Similique ratione veniam eaque hic cumque, distinctio corporis
          repudiandae est quisquam! Perferendis nisi ut recusandae dicta quod
          nobis corporis enim consectetur.
        </p>
        <article>
          <h3>Work Experience</h3>
          <ul>
            <li>Front-end Developer at Anvil 2023.01-2024.02</li>
            <li>Merchandising Representative </li>
            <li>Research Assistant</li>
          </ul>
        </article>
        <article>
          <h3>Dev Stack</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>React-query</li>
            <li>Node.js/Nest.js</li>
            <li>mssql</li>
          </ul>
        </article>
        <article>
          <h3>Featured On</h3>
          <ul>
            <li>blogpost 01</li>
            <li>blogpost 02</li>
            <li>blogpost 03</li>
          </ul>
        </article>
      </div>
      <StaticImage
        src="./../images/profile-image.png"
        alt="Profile Image"
        className="rounded-lg w-44 h-44"
      />
    </section>
  );
}
