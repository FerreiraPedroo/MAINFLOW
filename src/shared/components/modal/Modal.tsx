import React from "react";
import { TextButton } from "../button/TextButton";

const typesBase =
  "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 p-3";

const types = {
  red: `${typesBase} bg-rose-100`,
  green: `${typesBase} bg-green-100`,
};

const textTypes = {
  red: "text-rose-600",
  green: "text-green-600",
};

const iconTypes = {
  red: "",
  green: "",
};

export function Modal({
  title,
  info,
  description,
  type,
  buttons,
}: {
  title: string;
  info: string;
  description: string;
  type: keyof typeof types;
  buttons: { text: string; type: any; onClick: () => null }[];
}) {
  return (
    <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className={types[type] ?? typesBase}>
          <svg
            className={textTypes[type]}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 text-center mb-2">
          {title}
        </h3>
        <h4 className="text-lg font-medium text-slate-800 text-center mb-2">
          {info}
        </h4>
        <p className="text-slate-500 text-center mb-6">{description}</p>
        <div className="flex gap-3">
          {buttons.map((button, index) => (
            <TextButton
              key={index}
              text={button.text}
              type={button.type}
              onClick={button.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
