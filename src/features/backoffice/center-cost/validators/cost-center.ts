import z from "zod";

export const centerCostValidator = z.object({
  title: z.string().nonempty(),
  description: z.string().nullish(),
  status: z.enum(["ATIVO", "DESATIVADO"]),
});
