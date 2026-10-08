type PaymentControlMonthValues = {
  id: number;
  sequence: number;
  month: string;
  send_date: string | null;
  document: string | null;
  value: number | null;
  supplier_id: number;
  address_id: number;
};

export type PaymentControl = {
  area: string;
  suppliers: {
    id: number;
    legal_name: string;
    trade_name: string;
    address: {
      id: number;
      short_address: string;
      full_address: string;
      month_values: PaymentControlMonthValues[];
    }[];
  }[];
};
