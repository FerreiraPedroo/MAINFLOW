import React from "react";
import { BackButton } from "../button/BackButton";

export function Header({
  title,
  subTitle,
  center = false,
  backButton = false,
}: {
  title: string;
  subTitle?: string;
  center?: boolean;
  backButton?: boolean;
}) {
  return (
    <header className="flex gap-4 w-full p-4 place-items-center">
      {backButton && <BackButton />}
      <div className="w-full">
        <h1 className={`w-full text-4xl font-bold ${center && "text-center"}`}>
          {title}
        </h1>
        <p className="text-slate-500">{subTitle}</p>
      </div>
    </header>
  );
}
