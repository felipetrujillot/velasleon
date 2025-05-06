<script setup lang="ts">
import type { GetProductos } from "~~/server/trpc/routers/productos";

const props = defineProps<{
  producto: GetProductos[0];
}>();
</script>

<template>
  <NuxtLink class="h-full w-full" :to="`/producto/slug`">
    <div class="cursor-pointer">
      <img :src="producto.imagen" :alt="producto.nombre" class="w-full" />

      <h1 class="capitalize">{{ producto.nombre }}</h1>
      <h1 class="capitalize">{{ producto.descripcion }}</h1>
    </div>
  </NuxtLink>
</template>
