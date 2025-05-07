import type { GetProductos } from "~~/server/trpc/routers/productos";

export const useSheet = () => useState("useSheet", () => false);

export const useCart = () => useState<GetProductos>("useCart", () => []);

export const useTotalCart = () => useState<number>("useTotalCart", () => 0);
/**
 *
 * @param item
 */
export const addItemToCart = (item: GetProductos[0]) => {
  const shopCart = useCart();

  shopCart.value.push(item);
};
