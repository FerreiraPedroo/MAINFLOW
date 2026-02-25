const colors: any = {
  error: {
    bg1: "bg-rose-50 border-rose-200",
    bg2: "bg-rose-100",
    svg: "text-rose-600",
    title: "text-rose-800",
    text: "text-rose-600",
  },
  alert: {
    bg1: "bg-amber-50 border-amber-200",
    bg2: "bg-amber-100",
    svg: "text-amber-600",
    title: "text-amber-800",
    text: "text-amber-600",
  },
};

export function Notification({
  type,
  title,
  text,
}: {
  type: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 p-4 border ${colors?.[type]?.["bg1"] || "bg-stone-100 border-stone-200"} rounded-xl`}
    >
      <div
        className={`w-10 h-10 rounded-full ${colors?.[type]?.["bg2"] || "bg-stone-200"} flex items-center justify-center shrink-0`}
      >
        <svg
          className={`w-5 h-5 ${colors?.[type]?.["svg"] || "text-stone-600"}`}
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
      <div>
        <p
          className={`font-semibold ${colors?.[type]?.["title"] || "text-stone-800"}`}
        >
          {title}
        </p>
        <p
          className={`text-sm ${colors?.[type]?.["text"] || "text-stone-600"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
