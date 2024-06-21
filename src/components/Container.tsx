import * as React from "react";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Container(props: IProps) {
  const { children, ...attr } = props;

  return (
    <section
      {...attr}
      className={`h-screen lg:flex lg:max-w-screen-lg lg:mx-auto border border-black ${attr.className}`}
    >
      {children}
    </section>
  );
}
