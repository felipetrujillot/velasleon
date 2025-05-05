import { router } from "../trpc";
import type { inferRouterOutputs } from "@trpc/server";
import { usuariosTrpc } from "./usuarios";
import { productosTrpc } from "./productos";
/**
 *
 */
export const appRouter = router({
  usuarios: usuariosTrpc,

  productos: productosTrpc,
});

// export type definition of API
export type AppRouter = typeof appRouter;
export type RouterOutput = inferRouterOutputs<AppRouter>;
export type RouterInput = inferRouterOutputs<AppRouter>;
