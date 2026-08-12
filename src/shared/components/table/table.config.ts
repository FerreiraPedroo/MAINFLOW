type Size = Record<number, string>;
type Position = Record<string, string>;

export const tableConfig: { size: Size; position: Position } = {
  size: {
    0: "w-1/16",
    1: "w-1/10",
    2: "w-2/10",
    3: "w-3/10",
    4: "w-4/10",
    5: "w-5/10",
    6: "w-6/10",
    7: "w-7/10",
    8: "w-8/10",
    9: "w-9/10",
    10: "w-10/10",
  },
  position: { center: "text-center", end: "text-end", start: "text-start" },
};
