import { z } from "zod";

export const messageSchema = z.object({
  message: z.string().min(10,'Type at least 10 characters').max(300,'Type max 300 characters'),
});
