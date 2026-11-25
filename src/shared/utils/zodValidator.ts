import { type ZodType } from "zod";

export function zodDataValidatorUtil<T>(schem: ZodType, data: T): boolean {
  try {
    schem.parse(data);
    return true;
  } catch (error: unknown) {
    console.log(error?.issues[0]);
    // if(error instanceof z.ZodError){}
    return false;
  }
}
