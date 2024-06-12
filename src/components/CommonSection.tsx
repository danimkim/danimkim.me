import * as React from "react";

export default function CommonSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`h-screen lg:flex lg:max-w-screen-lg lg:mx-auto ${className} border border-black`}
    >
      {children}
    </section>
  );
}
