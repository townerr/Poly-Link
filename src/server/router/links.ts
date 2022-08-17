import { createRouter } from "./context";
import { z } from "zod";

const Link = z.object({
  id: z.string(),
  userId: z.string(),
  text: z.string(),
  url: z.string(),
  icon: z.string().nullish(),
  textColor: z.string(),
  bgColor: z.string(),
  font: z.string()
});

const Links = z.array(Link);

export const linksRouter = createRouter()
  .query("getLinksFromUserId", {
    input: z.object({
      userId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const links: Links = await ctx.prisma.link.findMany({
        where: {
          userId: input.userId,
        },
      });

      return links;
    }
  })
  .mutation("createLink", {
    input: z.object({
      userId: z.string(),
      text: z.string(),
      url: z.string(),
      icon: z.string(),
      textColor: z.string(),
      bgColor: z.string(),
      font: z.string()
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.link.create({
        data: {
          userId: input.userId,
          text: input.text,
          url: input.url,
          icon: input.icon,
          textColor: input.textColor,
          bgColor: input.bgColor,
          font: input.font
        },
      });
    },
  });

export type LinkType = z.infer<typeof Link>;
export type Links = z.infer<typeof Links>;