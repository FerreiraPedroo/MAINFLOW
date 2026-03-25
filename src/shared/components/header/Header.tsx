import React from "react";
import { BackButton } from "../button/BackButton";

export function Header({
  title,
  subTitle,
  backButton = true,
}: {
  title: string;
  subTitle?: string;
  backButton?: boolean;
}) {
  return (
    <header className="flex gap-4">
      {backButton && <BackButton />}
      <div>
        <h1 className="p-0 text-2xl lg:text-3xl font-bold text-slate-800">
          {title}
        </h1>
        <p className="text-slate-500 mt-1">{subTitle}</p>
      </div>
    </header>
  );
}
