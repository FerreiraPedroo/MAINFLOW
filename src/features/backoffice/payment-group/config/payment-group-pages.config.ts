import * as paymentGroups from "../pages";

export const paymentGroupPagesConfig = [
  {
    path: "/payment-groups",
    element: paymentGroups.PaymentGroupList,
    permission: "management:management",
  },
];
