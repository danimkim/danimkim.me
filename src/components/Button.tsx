import * as React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: IProps) {
  const { children, ...attr } = props;

  return (
    <button
      {...attr}
      className={`w-full h-11 rounded-lg bg-black text-white hover:bg-stone-900 transition ease-in-out duration-300 ${attr.className}`}
    >
      {children}
    </button>
  );
}
