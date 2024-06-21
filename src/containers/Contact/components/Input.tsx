import * as React from "react";

interface IProps {
  label: React.ReactNode;
  isMultiLine?: boolean;
  className?: string;
}

/** Form 내부 Input 요소
 * @prop {string} label input 항목명
 * @prop {boolean} isMultiLine 입력값이 여러줄의 장문 텍스트인지 여부
 */
export default function FormInput({ label, isMultiLine, className }: IProps) {
  return (
    <div className={`lg:flex lg:flex-col ${className}`}>
      <label htmlFor="" className="font-semibold">
        {label}
      </label>
      {isMultiLine ? (
        <textarea
          name="content"
          className="border border-slate-400 lg:h-72 lg:p-2 focus:outline-none focus:border-black focus:border-2"
        />
      ) : (
        <input
          type="text"
          className="border border-slate-400 lg:h-12 lg:pl-2 focus:outline-none focus:border-black"
        />
      )}
    </div>
  );
}
