import * as paymentControl from "../index";

export const paymentControlPagesConfig = [
  {
    path: "/payment-control",
    element: paymentControl.PaymentControlList,
    permission: "operations:payment-control",
  },
];
