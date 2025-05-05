import { db } from "~~/server/db/db";
import { protectedProcedure, router } from "../trpc";
import { productos } from "~~/server/db/db_schema";

export const productosTrpc = router({
  getProductos: protectedProcedure.query(async () => {
    return await db.select().from(productos);
  }),
});
