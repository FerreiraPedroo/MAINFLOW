import React from "react";
import { TextButton } from "../button/TextButton";
import { Check, X } from "lucide-react";

const icons = {
  sucess: <Check className="stroke-green-500 stroke-3" size="128" />,
  fail: <X className="stroke-rose-500 stroke-3" size="128" />,
};

const textColor = {
  sucess: "text-green-900",
  fail: "text-rose-900",
};

export type ModalType = {
  title: string;
  info: string;
  description: string;
  type: keyof typeof icons;
  buttons: { text: string; color: any; onClick: () => void }[];
};

/**
 *
 * @param param0
 * @type ModalType ```{  title: string;  info: string;  description: string;  type: keyof typeof types;  buttons: { ext: string; type: any; onClick: () => void }[];
}```
 * @returns
 */
export function Modal({ title, info, description, type, buttons }: ModalType) {
  return (
    <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2`}
        >
          {icons[type]}
        </div>
        <h3 className={`text-xl font-bold text-center mb-2 ${textColor[type]}`}>
          {title}
        </h3>
        <h4 className="text-lg font-medium text-slate-800 text-center mb-2">
          {info}
        </h4>
        <p className="text-slate-500 text-center mb-6">{description}</p>
        <div className="flex justify-center gap-3">
          {buttons.map((button, index) => (
            <TextButton
              key={index}
              text={button.text}
              color={button.color}
              onClick={button.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
