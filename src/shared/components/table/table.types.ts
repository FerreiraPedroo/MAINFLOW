export type Headers = {
  key: string;
  header: string;
  size: number;
  position?: string;
  render?: (row: any) => React.ReactNode;
};

export type TableInput = {
  columns: Headers[];
  data?: any[];
  onClick?: (row: any) => null;
};
