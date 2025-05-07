<script setup lang="ts">
import type { GetProductos } from "~~/server/trpc/routers/productos";

const props = defineProps<{
  producto: GetProductos[0];
}>();
</script>

<template>
  <NuxtLink :to="`/producto/slug`" class="block w-full">
    <img
      :src="producto.imagen"
      :alt="producto.nombre"
      class="w-full rounded-md"
    />
    <h1 class="capitalize mt-2 font-semibold text-lg">{{ producto.nombre }}</h1>

    <p class="slashed-zero tabular-nums text-lg">
      {{ clpFormat(producto.precio) }}
    </p>
  </NuxtLink>
</template>
