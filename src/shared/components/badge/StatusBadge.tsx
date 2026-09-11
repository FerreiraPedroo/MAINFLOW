import React from "react";

const base = "px-2 py-0.5 font-medium rounded-md inline-flex items-center";

const statusSize = {
  1: "text-xs",
  2: "text-sm",
  3: "text-md",
  4: "text-lg",
  5: "text-xl",
};

const statusVariant = {
  DEFAULT: `${base} bg-gray-50 text-gray-600 inset-ring inset-ring-gray-500/30`,
  ABERTO: `${base} bg-gray-50 text-gray-600 inset-ring inset-ring-gray-500/30`,
  FINALIZADO: `${base} bg-green-50 text-green-700 inset-ring inset-ring-green-600/30`,
  ANDAMENTO: `${base} bg-yellow-50 text-yellow-800 inset-ring inset-ring-yellow-600/30`,
  CANCELADO: `${base} bg-red-50 text-red-700 inset-ring inset-ring-red-600/20`,
};

export type StatusBadge = {
  variant: keyof typeof statusVariant;
  text: string;
  size?: keyof typeof statusSize;
};

export function StatusBadge({ variant, text, size }: StatusBadge) {
  return (
    <span
      className={`${statusVariant[variant] ?? statusVariant["DEFAULT"]} ${statusSize[size ?? 1]}`}
    >
      {text}
    </span>
  );
}
