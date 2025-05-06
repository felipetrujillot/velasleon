import { db } from "~~/server/db/db";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import { productos } from "~~/server/db/db_schema";
import { RouterOutput } from ".";
import { z } from "zod";

export const productosTrpc = router({
  /**
   *
   */
  getProductos: publicProcedure.query(async () => {
    return await db.select().from(productos);
  }),

  getProductoSlug: publicProcedure
    .input(
      z.object({
        slug_producto: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { slug_producto } = input;
      const findSlug = await db.select().from(productos);

      if (findSlug.length === 0) throw new Error("No se encontró el producto");
      return findSlug[0];
    }),
});

export type GetProductos = RouterOutput["productos"]["getProductos"];
