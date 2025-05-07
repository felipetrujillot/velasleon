<script setup lang="ts">
const { $trpc } = useNuxtApp();

const data = await $trpc.productos.getProductos.query();

definePageMeta({
  layout: "client-layout",
});
</script>
<template>
  <div class="space-y-12">
    <div class="space-y-4">
      <h1 class="font-semibold text-2xl">Nuevos lanzamientos</h1>
      <div class="grid grid-cols-4">
        <div>
          <NuxtLink :to="`/producto/slug`" class="block w-full">
            <img
              :src="data[0].imagen"
              :alt="data[0].nombre"
              class="w-full rounded-md"
            />
            <h1 class="capitalize mt-2 font-semibold text-lg">
              {{ data[0].nombre }}
            </h1>

            <p class="slashed-zero tabular-nums text-lg">
              {{ clpFormat(data[0].precio) }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <h1 class="font-semibold text-2xl">Más populares</h1>
      <div
        class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
      >
        <div
          v-for="producto in data"
          :key="producto.id_producto"
          class="break-inside-avoid mb-4"
        >
          <CardProducto :producto="producto" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <Card class="bg-secondary">
        <h1 class="font-semibold">Pago seguro</h1>
      </Card>

      <Card class="bg-secondary">
        <h1 class="font-semibold">Pago seguro</h1>
      </Card>

      <Card class="bg-secondary">
        <h1 class="font-semibold">Pago seguro</h1>
      </Card>
    </div>
  </div>
</template>
