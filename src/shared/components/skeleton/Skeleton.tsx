import React from "react";

const typeModel = {
  input: `<div className="h-8 bg-gray-200 rounded animate-pulse"></div>`,
};

type SkeletonType = {
  type: keyof typeof typeModel;
  size: number;
};

export function Skeleton({ type, size }: SkeletonType) {
  return (
    <div className={`grid ${"grid-cols-" + size} gap-4 mt-2`}>
      {typeModel[type]}
      {/* <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-8 bg-gray-200 rounded  animate-pulse"></div>
      <div className="..."></div>
      <div className="col-span-2 ..."></div> */}
    </div>
  );
}

export function SkeletonCard() {
  return <div className="h-48 rounded-t dark:bg-gray-300"></div>;
}
export function SkeletonInput() {
  return <div className="w-full h-6 rounded dark:bg-gray-300"></div>;
}
