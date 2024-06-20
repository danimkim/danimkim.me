import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

interface IProps {
  title: string;
  onClickHandler: any;
}

export default function ProjectCard({ title, onClickHandler }: IProps) {
  return (
    <article
      className="lg:h-full lg:flex lg:flex-col-reverse border border-black"
      onClick={onClickHandler}
    >
      <h3 className="border border-t-black lg:h-8 lg:pl-4 lg:leading-8">
        {title}
      </h3>
      <StaticImage
        src="./../../images/alacartemall.png"
        alt="alacarte mall logo"
        className="lg:w-60"
      />
    </article>
  );
}
