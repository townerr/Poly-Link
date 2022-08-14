import { createRouter } from "./context";
import { z } from "zod";

export const linksRouter = createRouter()
  .query("getLinksFromUserId", {
    input: z.object({
      userId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.link.findMany({
        where: {
          userId: {
            equals: input.userId,
          },
        },
      });
    }
  });
