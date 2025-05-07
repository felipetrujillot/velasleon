<script setup lang="ts">
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LucideShoppingCart } from "lucide-vue-next";

const { $router } = useNuxtApp();

const showSheet = useSheet();
const shopCart = useCart();
const totalCart = useTotalCart();

const goToPay = () => {
  $router.push("/pagar");
  showSheet.value = false;
};
</script>

<template>
  <Sheet :open="showSheet">
    <SheetTrigger>
      <Button variant="ghost" @click.prevent="showSheet = !showSheet">
        <LucideShoppingCart />
      </Button>
    </SheetTrigger>
    <SheetContent v-model:overlay="showSheet">
      <div class="overflow-x-hidden min-h-screen">
        <div class="flex flex-col justify-between h-full px-4 py-4">
          <div class="space-y-4">
            <SheetTitle class="text-2xl">Tu carrito</SheetTitle>
            <div class="overflow-y-scroll">
              <div class="space-y-2">
                <template v-for="c in shopCart">
                  <div class="grid grid-cols-2 md:grid-cols-3">
                    <img height="50" width="50" :src="c.imagen" />

                    <div>
                      <h1>{{ c.nombre }}</h1>
                    </div>

                    <div>
                      <h1>{{ c.precio }}</h1>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div>
            <h1 class="font-semibold text-xl">Resumen del pedido</h1>
            <p>Productos ({{ shopCart.length }})</p>

            <div class="flex justify-between items-center">
              <h1>Subtotal incl. IVA</h1>

              <h1 class="font-semibold text-xl">{{ clpFormat(totalCart) }}</h1>
            </div>
            <Button class="w-full" @click.prevent="goToPay">Ir a pagar</Button>
            <p class="text-muted-foreground text-sm">
              Al hacer click en "ir a pagar" estás aceptando nuestra Política de
              privacidad
            </p>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
