import React from "react";
import { StatusBadge } from "@/shared/components/badge/StatusBadge";

export function StatusCell({ variant, text, size }: StatusBadge) {
  return <StatusBadge variant={variant} text={text} size={size ?? 1} />;
}
