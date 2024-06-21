import * as React from "react";

interface IProps {
  labelName: React.ReactNode;
  children: any;
}

/** input 혹은 textarea 렌더링 여부 prop 받기 */
export default function Input({ labelName, children }: IProps) {
  return (
    <div className="lg:flex lg:flex-col">
      <label htmlFor="">{labelName}</label>
      <input
        type="text"
        className="border border-slate-400 lg:h-8 focus:outline-none focus:border-black"
      />
    </div>
  );
}
