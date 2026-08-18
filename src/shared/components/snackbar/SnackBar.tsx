import React from "react";

export interface SnackBarType {
  snackType: string;
  titleMessage: string;
  message: string;
}

const color = {
  get(type: string) {
    switch (type) {
      case "sucess":
        return this.sucess;
        break;
      case "fail":
        return this.fail;
        break;
      case "WARNING":
        return this.WARNING;
        break;
      default:
        return this.default;
        break;
    }
  },
  sucess: {
    box: "border-green-500 bg-green-50",
    typeText: "text-green-800",
    message: "text-green-700",
    icon: "text-green-700",
  },
  fail: {
    box: "border-red-500 bg-red-50",
    typeText: "text-red-800",
    message: "text-red-700",
    icon: "text-red-700",
  },
  WARNING: {
    box: "border-yellow-500 bg-yellow-50",
    typeText: "text-yellow-800",
    message: "text-yellow-700",
    icon: "text-yellow-700",
  },
  default: {
    box: "border-gray-500 bg-gray-50",
    typeText: "text-gray-800",
    message: "text-gray-700",
    icon: "text-gray-700",
  },
};
export function SnackBar({
  titleMessage,
  message,
  snackType = "DEFAULT",
}: SnackBarType) {
  return (
    <div
      className={`absolute right-2 top-2 w-1/2 rounded-md border p-4 shadow-sm z-100 ${color.get(snackType)?.box}`}
    >
      <div className={`flex items-start gap-4`}>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`-mt-0.5 size-6 ${color.get(snackType)?.icon}`}
        >
          <path
            className={color.get(snackType)?.icon}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div className="flex-1">
          <strong
            className={`block leading-tight font-medium ${color.get(snackType)?.typeText}`}
          >
            {titleMessage}
          </strong>

          <p className={`mt-0.5 text-sm ${color.get(snackType)?.message}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
