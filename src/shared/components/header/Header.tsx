import React from "react";

export function Header({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <header className="flex gap-4">
      <div>
        <h1 className="p-0 text-2xl lg:text-3xl font-bold text-slate-800">
          {title}
        </h1>
        <p className="text-slate-500 mt-1">{subTitle}</p>
      </div>
    </header>
  );
}
