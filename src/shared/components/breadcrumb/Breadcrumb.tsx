import React, { useState } from "react";

type Breadcrumb = {
  title: string;
  url: string;
};

const listBreadcrumb = [
  {
    title: "Cadastro",
    url: "string",
  },
  {
    title: "Cadastro",
    url: "string",
  },
  {
    title: "Cadastro",
    url: "string",
  },
  {
    title: "Title",
    url: "string",
  },
];

export function Breadcrumb({
  itemList = listBreadcrumb,
}: {
  itemList: Breadcrumb[];
}) {
  return (
    <div className="bg-white px-2 pt-2.5 pb-2 mb-2 shadow-lg">
      <div className="flex items-center gap-1">
        {itemList.map((breadcrumb, index, array) => (
          <>
            <div
              className={`max-w-60 min-w-35 rounded-sm pb-0.5 px-1 bg-white `}
            >
              <p className=" text-sm font-semibold wrap-break-word">
                {breadcrumb.title +
                  " " +
                  breadcrumb.title +
                  breadcrumb.title +
                  breadcrumb.title}
              </p>
            </div>
            {index < array.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right h-5 w-3 shrink-0 transition-colors text-muted-foreground/30"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            )}
          </>
        ))}

        {/* {showModal && <BasicModal />} */}
      </div>
    </div>
  );
}
