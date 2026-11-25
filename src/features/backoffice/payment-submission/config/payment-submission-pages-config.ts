import * as paymentSubmission from "../index";

export const paymentSubmissionPagesConfig = [
  {
    path: "/payment-controls",
    element: paymentSubmission.PaymentSubmissionList,
    permission: "operations:payment-control",
  },
];
