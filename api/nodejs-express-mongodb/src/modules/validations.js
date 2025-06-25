import * as z from "zod/v4";

export const routes = {
  "POST:/users": z.object({
    name: z.string().min("5"),
    email: z.email(),
  }),
};
